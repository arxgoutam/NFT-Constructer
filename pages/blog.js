import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import OfferA from "./inner/OfferA";
function Blog() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/blog")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <>
      <Head>
        <title> NFT development information - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/blog" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/blog" />

        <meta
          name="description"
          content="White label NFT marketplace development company. Help to build a marketplace for artists, designers, and business owners, and guide you in how to build one."
        ></meta>
        <meta
          name="og:description"
          content="White label NFT marketplace development company. Help to build a marketplace for artists, designers, and business owners, and guide you in how to build one."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" NFT development information - Nft Constructer
"
        />
        <meta property="og:image" content="assets/img/meta/7.jpg" />
        <meta property="image" content="assets/img/meta/7.jpg" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constructer, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
      <OfferA />
      <div id="blog" className="cpy-6">
        <section>
          <div className="container">
            <div className="section-title">
              <p className="sm-title">My Blog</p>
              <h2 className="sec-title">Latest News</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>

            <div className="blog-container">
              {posts.map((post, index) => (
                <div className="blog-post" key={index}>
                  <div className="blog-img">
                    <img src={post.main_image} alt={post.seo_title} />
                  </div>
                  <div className="about-blog">
                    <Link href={post.slug}>
                      <a className="urbanist-black-18">
                        {post.title.substring(0, 40)}
                      </a>
                    </Link>
                    <p className="raleway-grey-16">{post.created_date}</p>
                    <p
                      className="sm-des"
                      dangerouslySetInnerHTML={{
                        __html: post.description.substring(0, 100),
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

Blog.layout = AppLayout;

export default Blog;
