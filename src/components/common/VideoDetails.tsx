import React, { useEffect } from "react";

interface Props {
    video: any;
}

const VideoDetails: React.FC<Props> = ( {video} ) => {
    
    if (!video) {
        return <p>Loading...</p>
    }
    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="video">
                <iframe title='video player' src={videoSrc} />
            </div>
        </div>
    )
}

export default VideoDetails;