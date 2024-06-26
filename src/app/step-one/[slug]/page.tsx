import YoutubeIframe from "@/app/(components)/YoutubeIframe";
import { client } from "@/utils/sanity/client";

interface IProps {
  params: {
    slug: string
  }
}

export default async function TutorialPage({ params }: IProps) {
  const tutorial = await client.fetch(`*[_type == "tutorial" && slug.current == 'rendering-paradigms'][0] {
    title,
    description,
    videos[] {
      url
    },
    "files": [
      {
        "url": files[].asset->url,
        "filename": files[].asset->originalFilename
      }
    ]
  }`, { slug: params.slug });

  console.log(tutorial);

  return (
    <div className="min-h-screen text-center bg-gray-900 px-20 py-10">
      <h1 className="text-5xl font-bold py-4">{tutorial.title}</h1>
      <p className="text-lg my-2">{tutorial.description}</p>
      <div className="my-10">
        <h2 className="text-3xl font-bold py-4">Videos: </h2>
        {tutorial.videos?.map((video: { url: string }) => (
          <YoutubeIframe key={video.url} link={video.url} className="flex justify-center" />
        ))}
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-bold py-4">Attached files: </h2>
        {tutorial.files?.map((fileData: { url: string, filename: string }) => (
          <a key={fileData.url} href={fileData.url} target="_blank" rel="noreferrer">
            <button className="btn btn-primary my-2">Download {fileData.filename}</button>
          </a>
        ))}
      </div>
    </div>
  );
}
