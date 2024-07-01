import videoLinkConverter from '../../utils/video/videoLinkConverter';

export default function YoutubeIframe({ link, className }: { link: string, className: string }) {
  return (
    <div className={className}>
      <iframe
        className="w-full"
        height="315"
        src={videoLinkConverter(link)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
