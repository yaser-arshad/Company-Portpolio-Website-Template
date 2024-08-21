'use client';

import { useState } from 'react';

import BlogsCard from './BlogsCard';

const popularCategoriesBlogsItemsAiMl = [
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
];

const popularCategoriesBlogsItemsCrypto = [
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
];

const popularCategoriesBlogsItemsBlockChain = [
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
];

const popularCategoriesBlogsItemsWebDev = [
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
];

const popularCategoriesBlogsItemsMobDev = [
  {
    imageSrc: '/images/blog1.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog2.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
  {
    imageSrc: '/images/blog3.png',
    postedBy: 'Posted By IR Solutions Dec 22, 2023',
    title: 'AI Trends to adapt in 2024',
    videoUrl: 'https://www.youtube.com/watch?v=bz70_TDy55U',
  },
];

const inputPopularCategoriesBlogs = [
  {
    text: 'Ai & ML',
    value: 'Ai-Ml',
  },
  {
    text: 'Crypto',
    value: 'Crypto',
  },
  {
    text: 'Block Chain',
    value: 'BlockChain',
  },
  {
    text: 'Web Development',
    value: 'WebDev',
  },
  {
    text: 'Mobile Development',
    value: 'MobDev',
  },
];

export default function PopularCategoriesBlogs() {
  var [selectedBlogs, setSelectedBlogs] = useState(inputPopularCategoriesBlogs[0].value);
  function renderedBlogList() {
    if (selectedBlogs === inputPopularCategoriesBlogs[0].value) {
      return [...popularCategoriesBlogsItemsAiMl];
    } else if (selectedBlogs === inputPopularCategoriesBlogs[1].value) {
      return [...popularCategoriesBlogsItemsCrypto];
    } else if (selectedBlogs === inputPopularCategoriesBlogs[2].value) {
      return [...popularCategoriesBlogsItemsBlockChain];
    } else if (selectedBlogs === inputPopularCategoriesBlogs[3].value) {
      return [...popularCategoriesBlogsItemsWebDev];
    } else {
      return [...popularCategoriesBlogsItemsMobDev];
    }
  }
  return (
    <div className='py-24 border-b-2 border-[#D9D9D9]'>
      <div className='w-6/12 mx-auto text-center'>
        <h1 className='text-7.2xl font-bold'>
          <span className='text-primary'>Popular</span> Categories
        </h1>
        <p className='text-lg font-normal my-2'>Find All Blogs Based on Relevant Categories</p>
      </div>
      <div className=' border-y py-4 mt-8'>
        <div className='flex justify-center items-center w-7/12 mx-auto px-1'>
          {inputPopularCategoriesBlogs.map((item) => {
            return (
              <label
                key={item.value}
                className={`rounded-full h-full py-2 text-center content-center ${item.value === selectedBlogs ? 'text-white bg-primary px-7' : 'text-black mx-8'}
                transition ease-in-out duration-200`}
              >
                <input
                  type='radio'
                  name='blogs'
                  className='hidden'
                  checked={item.value === selectedBlogs}
                  onChange={() => {
                    setSelectedBlogs(item.value);
                  }}
                />
                {item.text}
              </label>
            );
          })}
        </div>
      </div>
      <div className='grid grid-cols-3 gap-1 px-14'>
        {renderedBlogList().map((item, i) => (
          <BlogsCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
