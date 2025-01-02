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

const Blog = ({ article }: BigBlogProps) => {
  return (
    <div className=' flex flex-col mt-5 w-[12rem]'>

      <div>
        <Image src={"/smallBlog.png"} alt='Image' width={200} height={200} className=' object-fill w-[200px] rounded-lg' />
      </div>
      <div>
        <h3>          {article.title}
        </h3>
      </div>

    </div>
  )
}

export default Blog
