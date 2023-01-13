import AppLayout from "../component/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Review from "./inner/Review";
import HeroSub from "./inner/HeroSub";
import OfferA from "./inner/OfferA";
function Portfolio() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/portfolio")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPortfolio(result);
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
        <title>NFT website design portfolio - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/portfolio"
        />
        <link rel="canonical" href="https://nftconstructer.com/portfolio" />

        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />

        <meta
          name="description"
          content="We are a full-service NFT website development company that can assist you in developing and launching your own NFT marketplace so that clients may simply purchase your NFT.
"
        ></meta>
        <meta
          name="og:description"
          content="We are a full-service NFT website development company that can assist you in developing and launching your own NFT marketplace so that clients may simply purchase your NFT.
"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT website design portfolio - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/8.jpg" />
        <meta property="image" content="assets/img/meta/8.jpg" />
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
      <div className="portfolio-banner">
        <div id="home1">
          <section className="hero">
            <div className="container">
              <div className="hero-wrapper">
                <div
                  className="hero-content-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="hero-content">
                    <div className="title-top-img">
                      <img
                        src="assets/img/inner/cr-1.png"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="widht-60">
                      <h1 className="title hero-title">
                        Building Digital Products, brands experience
                      </h1>
                    </div>
                    <div className="widht-50">
                      <p className="description">
                        We provide Non-Fungible Development Services that can
                        help you create NFTs for artworks, digital collectibles,
                        gaming, sports, music, video, content Subscription, etc.
                      </p>
                    </div>
                    {/* <div className='input-box widht-40 '> */}
                    {/* <div className='input-area'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Type your email here'
                        />
                        <div className='icon'>
                          <i className='icofont-envelope'></i>
                        </div>
                        <div className='btn'>
                          <button className='singup-btn'>Sign Up</button>
                        </div>
                      </div> */}
                    <HeroSub />
                    {/* </div> */}
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src="assets/img/hero/portfolio.png"
                    alt="nft constructer"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="tak-logo" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="hero-bottom">
              <div className="row-4">
                <div className="logo-item">
                  <img src="assets/img/logo/google.png" alt="nft constructer" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/slack.png" alt="nft constructer" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/monday.png" alt="nft constructer" />
                </div>
                <div className="logo-item">
                  <img
                    src="assets/img/logo/microsoft.png"
                    alt="nft constructer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-bg">
        <div className="portfolio-area">
          <div className="container">
            <div className="section-title cpy-5">
              <p className="sm-title">best services</p>
              <h2 className="sec-title">My Portfolio</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>
            <div className="portfolio-item">
              <div className="grid-2">
                {portfolio.map((portfolio, index) => (
                  <div
                    className={
                      index % 2
                        ? "prof-item cg-direction cpy-5"
                        : "prof-item cpy-5"
                    }
                    key={index}
                  >
                    <div
                      className="prof-des"
                      data-aos={index % 2 ? "fade-left" : "fade-right"}
                      data-aos-duration="1500"
                    >
                      <h3 className="prof-title">{portfolio.name}</h3>
                      <p className="prof-text">{portfolio.description}</p>
                      <a href={portfolio.link} className="view-shot">
                        Visit Live Site
                        <img
                          src="assets/img/long-arrow-right.svg"
                          alt="nft constructer"
                        />
                      </a>
                    </div>
                    <div
                      className="prof-img prof-right-img"
                      data-aos={index % 2 ? "fade-right" : "fade-left"}
                      data-aos-duration="1500"
                    >
                      <img src={portfolio.image} alt={portfolio.name} />
                      <div
                        className={index % 2 ? "prof-right" : "prof-left"}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================happy clients======================= */}
        <Review />
        {/* =====================happy clients end======================= */}
      </div>
    </>
  );
}

Portfolio.layout = AppLayout;

export default Portfolio;
