import React, { useEffect } from "react";

interface Props {
    video: any;
}

const VideoDetails: React.FC<Props> = ( {video} ) => {
    
    if (!video) {
        return   <div className="o-media__figure">
        <span className="skeleton-box"></span>
      </div>
    }
    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}?rel=0&amp;autoplay=1&mute=1`;
    return (
        <div>
            <div className="video">
                <iframe title='video player' src={videoSrc} />
            </div>
        </div>
    )
}

export default VideoDetails;