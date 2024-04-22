import ReactPlayer from 'react-player/vimeo';

import './Video.scss';

function VideoContainerLoop({videoArray}) {
  return (
    <div className="inside-xl">
      <div className="padding-10 flex-md">
        {videoArray.map((videoUrl, index) => (
          <div key={index} className="obrien-vimeo">
            <ReactPlayer
              url={videoUrl}
              //@ts-ignore
              controls="true"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoContainerLoop;
