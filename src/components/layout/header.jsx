import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import PostList from '../feed/postList';

const Header = () => {
    const [activeTab, setActiveTab] = useState("Trending");
    const tabs=["Trending", "Recent", "Popular"];
    
  return (
    <>
     <div className='container'>
        {/* feed & search bar */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 justify-between py-6'>
        <h1>Feed</h1>
        <div className='flex items-center input-wrap shadow'>
        <Icon icon="tabler:search" width="24" height="16" className='light-gray' />
            <input type="text" placeholder='Search' className='input'/>
        </div>
      </div>
      {/* navigation tabs */}
      <div className="flex items-center gap-8 font-semibold">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer ${activeTab === tab ? "green border-b-2 border-[#079956] pb-2" : "border-none  pb-2"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className='pt-4'>
        {activeTab === "Trending" && <div><PostList/></div>}
        {activeTab === "Recent" && <div>Recent Content</div>}
        {activeTab === "Popular" && <div>Popular Content</div>}
      </div>

    </div>
    </>
   
  )
}

export default Header