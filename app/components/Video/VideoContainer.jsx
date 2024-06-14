import VideoImage from '~/components/obrien/meta/VideoImage';

import {useEffect, useState} from 'react';

function VideoContainer({productVideo, productVideo2, videoImage}) {
  // Hydration fix: Ensure the same initial render on server and client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`${
        productVideo2 || videoImage ? 'inside-xl flex-md flexFix' : 'inside-xl'
      }`}
    >
      {productVideo && (
        <div
          className={`${
            videoImage
              ? 'padding-10 possibleFix imgFix'
              : 'padding-10 possibleFix'
          }`}
        >
          <div className="obrien-vimeo">
            <iframe
              src={productVideo}
              title="video"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {productVideo2 && (
        <div className="padding-10 possibleFix">
          <div className="obrien-vimeo">
            <iframe
              src={productVideo2}
              title="video"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {videoImage && (
        <div className="padding-10">
          <VideoImage myImage={videoImage} />
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
