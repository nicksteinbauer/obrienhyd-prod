import {Image} from '@shopify/hydrogen';

function TabImage({myImage}) {
  return (
    <>
      {myImage && (
        <div className="tabImage">
          <Image data={myImage} sizes="(max-width: 1024px) 100vw, 2500px" />
        </div>
      )}
    </>
  );
}
export default TabImage;
