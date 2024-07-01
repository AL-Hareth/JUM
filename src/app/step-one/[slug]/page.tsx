import YoutubeIframe from "@/app/(components)/YoutubeIframe";
import { client } from "@/utils/sanity/client";

interface IProps {
  params: {
    slug: string
  }
}

interface IFile {
  title: string,
  url: string
}

interface IVideo {
  url: string,
  title: string,
  files: IFile[]
}

export default async function TutorialPage({ params }: IProps) {
  const tutorial = await client.fetch(`*[_type == 'tutorial' && slug.current == $slug][0] {
    title,
    description,
    slug,
    videos[] {
      url,
      title,
      "files": [{
        "url": files[].asset->url,
        "title": files[].asset->originalFilename,
      }]
    }
  }`, { slug: params.slug });

  return (
    <div className="min-h-screen text-center bg-gray-900 px-20 py-10">
      <h1 className="text-5xl font-bold py-4">{tutorial.title}</h1>
      <p className="text-lg my-2">{tutorial.description}</p>
      <div className="my-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold py-4">Videos: </h2>
        {tutorial.videos ? tutorial.videos.map((video: IVideo) => (
          <div className="my-2 bg-base-200 collapse lg:w-2/3" key={video.url}>
            <input type="checkbox" className="peer" />
            <div
              className="flex justify-between collapse-title bg-gray-600 text-primary-content peer-checked:bg-slate-700 peer-checked:text-secondary-content">
              <span>{video.title}</span>
            </div>
            <div
              className="collapse-content bg-slate-700 text-primary-content peer-checked:bg-slate-700 peer-checked:text-secondary-content">
              <YoutubeIframe key={video.url} link={video.url} className="flex justify-center mt-2" />
              {video.files?.map((file: IFile) => (
                <div key={file.url}>
                  <a className="text-md font-bold py-4 btn btn-info my-3" target="_blank" href={file.url}>Download: {file.title}</a>
                </div>
              ))}
            </div>
          </div>
        )) : <div className="text-xl font-bold py-4">No videos yet!</div>}
      </div>
    </div>
  );
}
