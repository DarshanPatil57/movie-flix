import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-36 px-12'>
        <h1 className=' text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-600 text-black p-3 px-14 text-lg bg-opacity-50 font-bold rounded-lg'>▶️ Play</button>
            <button className=' mx-2 bg-gray-600 text-black p-3 px-14 text-lg bg-opacity-50 font-bold rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle