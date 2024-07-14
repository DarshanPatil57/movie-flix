import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-base w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-3 px-14 text-lg font-bold rounded-lg hover:opacity-80'>▶ Play</button>
            <button className=' mx-2 bg-gray-600 text-white p-3 px-14 text-lg bg-opacity-50 font-bold rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle