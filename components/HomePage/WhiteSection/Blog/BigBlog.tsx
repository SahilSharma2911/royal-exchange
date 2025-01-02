import Image from 'next/image'
import React from 'react'

interface Article {
  id: number;
  title: string;
  sub_title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface BigBlogProps {
  article?: Article | null;
}

const BigBlog = ({ article }: BigBlogProps) => {
  if (!article) {
    return (
      <div className='flex flex-col lg:flex-row gap-2 font-Roboto py-4'>
        <div className='w-full lg:w-6/12'>
          <div className='bg-gray-200 h-[400px] rounded-lg animate-pulse'></div>
        </div>
        <div className='font-Roboto w-full lg:w-6/12 flex flex-col gap-2 px-2'>
          <div className='h-8 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-6 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-24 bg-gray-200 rounded animate-pulse'></div>
        </div>
      </div>
    );
  }

  const contentWithoutTags = article.content.replace(/<[^>]*>/g, '');

  return (
    <div className='flex flex-col lg:flex-row gap-2 font-Roboto py-4'>
      <div className='w-full lg:w-6/12'>
        <Image
          src="/smallBlog.png"
          alt={article.title}
          width={600}
          height={600}
          className='object-fill w-full rounded-lg relative'
        />
      </div>

      <div className='font-Roboto w-full lg:w-6/12 flex flex-col gap-2 px-2'>
        <h3 className='text-[1.5rem] font-semibold leading-[130%]'>{article.title}</h3>
        <h2 className='font-medium'>{article.sub_title}</h2>
        <p className='text-[#48494A] flex justify-between items-center'>
          {contentWithoutTags}
        </p>
      </div>
    </div>
  )
}

export default BigBlog