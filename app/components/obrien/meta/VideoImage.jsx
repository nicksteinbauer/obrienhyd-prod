import {Image} from '@shopify/hydrogen';

function VideoImage({myImage}) {
  return (
    <>
      {myImage && (
        <div className="tabImage">
          <Image
            data={myImage}
            sizes="(max-width: 1024px) 100vw, 2500px"
            loaderOptions={{scale: 2}}
          />
        </div>
      )}
    </>
  );
}
export default VideoImage;
