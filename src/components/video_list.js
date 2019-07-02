import React from 'react';

import VideoListItem from './video_list_item';

const videoList = props => {
  const videoItem = props.videos.map(video => {
    return (
      <VideoListItem
        video={video}
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItem}</ul>;
};

export default videoList;
