import {Image} from '@shopify/hydrogen';

export default function ManualsSafety() {
  return (
    <>
      <div className="auto-grid manualsSafety">
        <div className="obrienVideo">
          <iframe
            className="youVideo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/axU0QpSdi_M?si=Y9cohLWSaATSnEwJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="obrienVideo">
          <iframe
            className="youVideo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cimqkFKD85k?si=rfDwJaDIb9a1LrZB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="obrienVideo">
          <iframe
            className="youVideo"
            title="Vimeo video player"
            src="https://player.vimeo.com/video/139281498?h=9ff1a107ab"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="obrienVideo">
          <iframe
            className="youVideo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IMjgnFPnEqU?si=PA0t1wv6Wx1VD-vR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="obrienVideo">
          <iframe
            className="youVideo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/axU0QpSdi_M?si=Y9cohLWSaATSnEwJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="auto-grid padd-vert-20">
        <Image
          src="https://cdn.shopify.com/s/files/1/0777/6940/8796/files/WatersportsResponsibilityCode.jpg?v=1697130510"
          alt="Watersports Responsibility Code"
          width={1160}
          height={100}
        />
      </div>
    </>
  );
}
