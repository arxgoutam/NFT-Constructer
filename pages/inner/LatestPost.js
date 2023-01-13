import React, { useEffect, useState } from "react";
import Link from "next/link";

function LatestPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/latest/post")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <>
      <div className='blog-right-side'>
        <div className='related-news'>
          <p className='urbanist-dark-22'>Recent News</p>

          <div className='news-container'>
            {posts.map((post, index) => (
              <div className='news' key={index}>
                <img
                  src={post.main_image}
                  className='recent-post-img'
                  alt={post.title}
                />

                <div className='news-txt'>
                  <Link href={"/" + post.slug}>
                    <a className='urbanist-black-14'>
                      {post.title.substring(0, 20)}
                    </a>
                  </Link>
                  <div className='news-date'>
                    <img src='../assets/imgs/calendar.svg' alt={post.title} />
                    <p className='raleway-grey-14'>{post.created_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestPost;
