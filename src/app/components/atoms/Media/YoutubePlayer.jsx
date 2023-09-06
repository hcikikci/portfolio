"use client";
import React from 'react';
import YouTube from 'react-youtube';
const YouTubePlayer = ({ videoId }) => {
    // Set up event handlers
    const onReady = (event) => {
        // Access the player instance
        const player = event.target;

        // // For example, you can automatically play the video
        // player.playVideo();
    };

    const onError = (error) => {
        console.error('YouTube Player Error:', error);
    };

    return (
        <YouTube loading={"lazy"} className="w-full h-full" iframeClassName="w-full h-full"
            videoId={videoId}
            onReady={onReady}
            onError={onError}
            opts={{host: 'https://www.youtube-nocookie.com'}}
        />
    );
};

export default YouTubePlayer;