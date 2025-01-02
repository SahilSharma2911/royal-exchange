"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BigBlog from './BigBlog';
import Blog from './Blog';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Article {
  id: number;
  title: string;
  sub_title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const Blogs = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [whatsappLink, setWhatsappLink] = useState("")

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ghostpanel.tech/api/articles');
        setArticles(response.data);
        if (response.data.length > 0) {
          setSelectedArticle(response.data[0].id);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    const fetchWhatsappLink = async () => {
      try {
        const response = await axios.get('https://ghostpanel.tech/api/whatsapp')
        if (response.data.status === "success") {
          setWhatsappLink(response.data.data.link)
        }
      } catch (error) {
        console.error('Error fetching WhatsApp link:', error)
      }
    }

    fetchWhatsappLink()
  }, []);

  const handleBlogClick = (id: number) => {
    setSelectedArticle(id);
  };


  return (
    <section className='w-full mt-7 md:mt-12 flex flex-col lg:flex-row gap-6 justify-between'>
      {/* left section match blogs  */}
      <div className='border rounded-lg w-full lg:w-8/12 py-4'>
        <div>
          <h3 className='font-Roboto text-[1.2rem] font-bold px-4 border-b pb-2'>Match Coverage</h3>
        </div>

        {/* all blogs  */}
        <div className='flex flex-col px-4'>
          {loading ? (
            <div>Loading articles...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <>
              {/* Pass selected article to BigBlog if it exists */}


              <BigBlog article={articles.find((article) => article.id === selectedArticle)} />

              <div className='flex gap-4 overflow-x-auto no-scrollbar'>
                {articles?.map((article) => (
                  <div className='w-fit h-fit'
                    key={article.id}
                    onClick={() => handleBlogClick(article.id)}
                  >
                    <Blog article={article} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* right section match advertisement */}

      <div className='w-full lg:w-3/12 flex flex-row lg:flex-col gap-5'>
        <div>
          <Link href={whatsappLink || "/"}>
            <motion.div
              whileHover={{ scale: 1, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
            >
              <Image src={"/tap.jpg"} width={300} height={300} alt='tag' />
            </motion.div>
          </Link>
        </div>
        <div>
          <Link href={whatsappLink || "/"}>
            <motion.div
              whileHover={{ scale: 1, y: -5 }} // Same hover effect
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
            >
              <Image src={"/tap.jpg"} width={300} height={300} alt='tag' />
            </motion.div>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Blogs;
