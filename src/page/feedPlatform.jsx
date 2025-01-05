import React from 'react'
import feedPlatform from './feedPlatform';
import Header from '../components/layout/header';
import Sidebar from '../components/layout/sidebar';

const FeedPlatform = () => {
  return (
    <div className='gray h-auto'>
        <div className="flex flex-col xl:flex-row gap-3 container">
          <div className='w-full xl:w-[65%]'><Header/></div>
          <div className='w-full xl:w-[35%]'><Sidebar/></div>
        </div>
    </div>
  )
}

export default FeedPlatform