import React from 'react';
import {Box,Stack} from '@mui/material';

import { VideoCard,ChannelCard } from './';

const Videos = ({videos,direction}) => {
    // console.log(videos);

    //Loader if the videos don't load
    if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,idx) => (
            <Box key ={idx}>
                {/* if item id video then render the Video Card and if id is channel render the channel Card */}
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos