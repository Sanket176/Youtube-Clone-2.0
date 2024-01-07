import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import { NavBar, Feed , VideoDetail, ChannelDetail, SearchFeed, Login, Signup } from './components';

const App = () => (

    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} /> 
                <Route path="/channel/:id" element={<ChannelDetail />} /> 
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Box>
    </BrowserRouter> 

);

export default App;