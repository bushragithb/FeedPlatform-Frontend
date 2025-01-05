import React from 'react'
import { Icon } from '@iconify/react';
import dp from "../../assets/images/dp.webp"

const posts = [
  {
    title: "Website is not getting indexed",
    author: "@Dohnavid042",
    time: "5 hours ago",
    content: "There are several reasons why your website isn't getting indexed by Google",
    engagement: { likes: 59, comments: 59 },
    categories: [
      { name: "Design Job", color: "purple" },
      { name: "Digital Marketing Course", color: "blue" },
      { name: "Resume", color: "green" }
    ]
  },
  {
    title: "How to improve website indexation",
    author: "@SophiaDesigns",
    time: "3 hours ago",
    content: "Here are few tips to boost website indexation on search engines.",
    engagement: { likes: 72, comments: 72 },
    categories: [
      { name: "SEO Strategies", color: "purple" },
      { name: "Web Development Tutorial", color: "blue" },
      { name: "Portfolio Projects", color: "green" }
    ]
  },
  {
    title: "Optimizing Website speed for better indexing",
    author: "@Techsavvy2022",
    time: "4 hours ago",
    content: "Improving website speed can positively impact your site's indexation and user action.",
    engagement: { likes: 85, comments: 85 },
    categories: [
      { name: "Website Optimization", color: "purple" },
      { name: "User Experience Design", color: "blue" },
      { name: "Case Studies", color: "green" }
    ]
  },
  {
    title: "Implementing Structured Data for Rich Snippets",
    author: "@CodeNinja99",
    time: "2 hours ago",
    content: "Adding structured data markup can enhance how serach engines interpret and display your content in search results.",
    engagement: { likes: 68, comments: 68 },
    categories: [
      { name: "Structured Data", color: "purple" },
      { name: "Content Optimization", color: "blue" },
      { name: "Data Visualization", color: "green" }
    ]
  },
  {
    title: "Creating High-Quality Backlinks For SEO",
    author: "@LinkBuilderPro",
    time: "1 hours ago",
    content: "Building authorititive backlinks from reputable sources can significantly impove your website's SEO performance and visibility in search results.",
    engagement: { likes: 77, comments: 77 },
    categories: [
      { name: "Backlink Strategy", color: "purple" },
      { name: "Link Building Techniques", color: "blue" },
      { name: "SEO Analysis", color: "green" }
    ]
  },
  {
    title: "Utilizing Social Media For Content Promotion",
    author: "@SocialMediaGuru",
    time: "just now",
    content: "Promoting your website content on social media patforms can drive traffic,engagement and improve its cances of being indexed by search engines.",
    engagement: { likes: 85, comments: 85 },
    categories: [
      { name: "Socia Media Marketing", color: "purple" },
      { name: "Content Promotion Strategies", color: "blue" },
      { name: "Engagement Metrics", color: "green" }
    ]
  }
];

const PostList = () => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post, index) => (
        <div key={index} className='bg-white border-1 border-[#F9F9F9] rounded shadow py-4 px-3 flex items-start justify-between w-full'>
          {/* Profile picture */}
          <div className='relative w-[50px]'>
            <img src={dp} alt="profile picture" className='w-[50px] h-[50px] object-contain rounded-[50px]' />
            <div className='absolute top-0 right-2 greenbg h-[8px] w-[8px] rounded-[8px]'></div>
          </div>

          {/* Post Content */}
          <div className='flex flex-col items-start justify-start gap-0 w-[90%]'>
            <h2>{post.title}</h2>
            <div className="flex items-center gap-1 mb-3">
              <p className="green para-sm">{post.author},</p>
              <p className="green para-sm">{post.time}</p>
            </div>
            <p>{post.content}</p>

            <div className="flex flex-col-reverse md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between w-full mt-4">
              {/* Engagement metrics */}
              <div className='flex items-center gap-4'>
                <span className='flex items-center gap-2'>
                  <Icon icon="iconamoon:like-light" width="20" height="20" />
                  <p className='para-sm'>{post.engagement.likes}</p>
                </span>
                <span className='flex items-center gap-2'>
                  <Icon icon="material-symbols-light:comment-outline" width="20" height="20" />
                  <p className='para-sm'>{post.engagement.comments}</p>
                </span>
              </div>
              {/* Categories */}
              <div className='flex flex-wrap sm:flex-nowrap items-center gap-4'>
                {post.categories.map((category, idx) => (
                  <div key={idx} className={`py-1 px-2 ${category.color === 'purple' ? 'light-purple' : category.color === 'blue' ? 'light-blue' : 'light-green'}`}>
                    <p className={`${category.color === 'purple' ? 'purple' : category.color === 'blue' ? 'blue' : 'green'} para-sm rounded font-semibold`}>
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-[1%]'>
            <Icon icon="pepicons-pencil:dots-y" width="20" height="20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
