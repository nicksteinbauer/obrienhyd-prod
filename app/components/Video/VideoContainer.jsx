function VideoContainer({productVideo, productVideo2}) {
  return (
    <div
      className={`${productVideo2 ? 'inside-xl flex-md flexFix' : 'inside-sm'}`}
    >
      {productVideo !== null && (
        <div>
          <div className="obrien-vimeo">
            <iframe
              src={productVideo}
              //@ts-ignore
              //controls="true"
              className="product-player"
              width="100%"
              height="100%"
              title={`YouTube video player | ${productVideo ?? ''}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
      {productVideo2 !== null && (
        <div className="padding-10 possibleFix">
          <div className="obrien-vimeo">
            <iframe
              src={productVideo2}
              title="video"
              //@ts-ignore
              //controls="true"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
