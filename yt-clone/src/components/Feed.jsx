import {React,useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import {SideBar,Videos} from './'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  //useEffect is a Lifecycle Hook which gets called when the components initially loads. Also have to provide a dependancy array
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items) )
  },[selectedCategory]);

  return (
    <Stack sx={{  flexDirection:{sx:"column",md:"row"}  }}>
      {/* Sidebar box */}
      <Box sx={{  height:{sx:"auto",md:"92vh"}, borderRight:'1px solid #e3e3e3', px:{sx: 0,md: 2}   }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body"
          sx={{ mt:1.5 , color:'#fff'}}
        >
          Copyright 2023 Sanket Rinayat
        </Typography>
      </Box>

      {/* Feed Box containing videos */}
      <Box p={1} sx={{overflowY: 'auto', height:'90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2 } sx={{color:'white'}}>
          {selectedCategory}
          <span style={{color:'#F31503'}}> Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed