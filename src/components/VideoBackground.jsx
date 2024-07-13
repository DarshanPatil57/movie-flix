import React, { useState } from 'react'
import { api_option } from '../utils/constants'

const VideoBackground = ({movieId}) => {

  const getMovieVideo = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US',api_option)
    const json = await data.json()
    console.log(json);

    const filterData = json.results.filter((video) => video.type ==="Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
    console.log(trailer);
    
  }
  useState(()=>{
    getMovieVideo()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default VideoBackground