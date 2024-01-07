import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoChannelTitle,demoVideoTitle } from '../utils/constants';

const VideoCard = ({ video:{id:{videoId},snippet }}) => {
//   console.log(videoId, snippet);
  return (
    <Card sx={{width: { xs: '100%', sm: '338px', md: '305px' }, boxShadow:'none' , borderRadius:0 }}>
        {/* VideoCard image */}
        <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
            <CardMedia
                image={ snippet?.thumbnails?.high?.url }
                alt={ snippet?.title }
                sx={{ width: { xs: '100%', sm: '338px', md: '305px' }, height:150}}
                />
        </Link>

        {/* VideoCard Description */}
        <CardContent  sx={{ backgroundColor: '#1e1e1e', height:'106px'}} >
            {/* Title */}
            <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            {/* Channel Title */}
            <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography variant="subtitle2" fontWeight="bold" color="grey">
                    {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{ fontSize: 12, color: 'grey', ml:'5px' }}/>
                </Typography>
            </Link>

        </CardContent>

    </Card>
  )
}

export default VideoCard