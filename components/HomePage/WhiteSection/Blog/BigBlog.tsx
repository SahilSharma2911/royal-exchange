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
  article: Article;
}

const BigBlog = ({ article }: BigBlogProps) => {
  // Parse the HTML content if needed
  const contentWithoutTags = article.content.replace(/<[^>]*>/g, '');

  return (
    <div className='flex flex-col lg:flex-row gap-2 font-Roboto py-4'>
      {/* left side Image section  */}
      <div className='w-full lg:w-6/12 '>
        <Image
          src="/smallBlog.png"
          alt={article.title}
          width={600}
          height={600}
          className='object-fill w-full rounded-lg relative'
        />
        {/* <div className='bg-black text-white absolute w-full bottom-0 rounded-b-lg py-1'>
          <p className='text-center'>{article.sub_title}</p>
        </div> */}
      </div>

      {/* right side info section  */}
      <div className='font-Roboto w-full lg:w-6/12 flex flex-col gap-2 px-2'>
        <h3 className='text-[1.8rem] font-semibold'>
          {article.title}
        </h3>

        <h2>
          {article.sub_title}
        </h2>

        <p className='text-[#48494A] flex justify-between items-center'>
          {contentWithoutTags}
        </p>

      </div>
    </div>
  )
}

export default BigBlog