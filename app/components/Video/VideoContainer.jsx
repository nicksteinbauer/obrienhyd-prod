import VideoImage from '~/components/obrien/meta/VideoImage';

function VideoContainer({productVideo, productVideo2, videoImage}) {
  return (
    <div
      className={`${
        productVideo2 || videoImage ? 'inside-xl flex-md flexFix' : 'inside-xl'
      }`}
    >
      {productVideo !== null && (
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
              title="vide"
              //@ts-ignore
              //controls="true"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {productVideo2 !== null && (
        <div className="padding-10 possibleFix">
          <div className="obrien-vimeo">
            <iframe
              src={productVideo2}
              title="vide"
              //@ts-ignore
              //controls="true"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {videoImage !== null && (
        <div className="padding-10">
          <VideoImage myImage={videoImage} />
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
