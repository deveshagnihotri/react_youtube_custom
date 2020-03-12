import React from "react";

function VideoDetails({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>Search to find video list..</div>;
  }

  const videoId = selectedVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log({ selectedVideo }, "selected video");
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={url}
          title="youtube"
        ></iframe>
      </div>
      <div>
        <h5>{selectedVideo.snippet.title}</h5>
      </div>
    </div>
  );
}

export default VideoDetails;
