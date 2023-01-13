import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import DemoForm from "./inner/demoform";
import TopProject from "./inner/TopProject";
import Newsletter from "./inner/Newsletter";
import Head from "next/head";
import Review from "./inner/Review";
import OfferA from "./inner/OfferA";
function Coin() {
  return (
    <>
      <Head>
        <title>Top Notch NFT Website Design Service - Nft Constructer</title>
        <meta
          property="og:title"
          content="Top Notch NFT Website Design Service - Nft Constructer"
        />
        <meta
          property="og:url"
          content="https://nftconstructer.com/website-design"
        />

        <link
          rel="canonical"
          href="https://nftconstructer.com/website-design"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="Including 3D virtual environments, Metaverse NFT, Metaverse Applications, and Decentralized platforms, we design and create components for the Metaverse."
        ></meta>
        <meta
          name="og:description"
          content="Including 3D virtual environments, Metaverse NFT, Metaverse Applications, and Decentralized platforms, we design and create components for the Metaverse."
        ></meta>
        <meta
          name="keywords"
          content="Nft website ui ux design nft website design company Best nft website design"
        ></meta>
        <meta property="og:image" content="assets/img/meta/3.jpg" />
        <meta property="image" content="assets/img/meta/3.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
      <OfferA />
      <div id="Coin" className="cpy-5">
        <div className="container">
          <section className="hero">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Next Level Design Solution For Your
                <span> Fintech Business</span>
              </h1>

              <p className="raleway-black-16">
                If you&apos;re looking for fantastic Design Solutions, no
                fintech or nft website is off limits with our team of
                multidisciplinary experts.
              </p>

              <div className="hero-checks">
                <div>
                  <img src="assets/imgs/check.svg" alt="Checked" />
                  <p className="raleway-grey-14">Free Register</p>
                </div>
                <div>
                  <img src="assets/imgs/check.svg" alt="Checked" />
                  <p className="raleway-grey-14">Great Service</p>
                </div>
              </div>
              <div className="hero-btns">
                <a href="#get-quoted" className="btn-hero-1">
                  Get Started
                </a>
              </div>
            </div>

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src="assets/img/hero/hero3.png"
                alt="nft constructer"
                className="he"
              />

              <img
                src="assets/img/hero/1.png"
                alt="nft constructer"
                className="hero-1"
              />
              <img
                src="assets/img/hero/2.png"
                alt="nft constructer"
                className="hero-2"
              />
            </div>
          </section>
        </div>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Reliable Platform
                    </a>
                    <img
                      src="assets/img/inner/timer.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Most Realiable Developers </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Project &apos;s Confidentiality
                    </a>
                    <img
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>All of Your Information Is Secure</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Communicative
                    </a>
                    <img
                      src="assets/img/inner/notice.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Clients say the team feels like their employees.</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # 24/7 Support
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="nft constructer" />
                  </div>
                  <p>Our designers are there to support you 24*7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}

      <div className="white-bg">
        {/* ================about us section ================== */}
        <section className="about-us cpy-6">
          <div className="container">
            <div className="row-col-2">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="about-us-img">
                  <img
                    src="assets/img/inner/about-us.png"
                    alt="nft constructer"
                  />
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about-us-content">
                  <div className="about-content-inner">
                    <h2>Description</h2>
                    <p>
                      We are a dynamic and award-winning team of UX designers,
                      developers, and strategists. You can expect powerful yet
                      polished websites, apps, and interfaces that add real
                      value to your brand. With the insight we provide
                      throughout the process of development, you&apos;ll lay
                      strong foundations for success with your new fintech
                      corporate identity. We&apos;ll develop visual and verbal
                      branding that articulates your values, aspirations, and
                      brand positioning in an exciting way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="assets/img/inner/cr-8.png"
            alt="nft constructer"
            className="cr8-img"
          />
          <img
            src="assets/img/inner/cr-6.png"
            alt="nft constructer"
            className="cr6-img"
          />
        </section>
        {/* ================about us section end ================== */}
        {/* ===================demo request section ================== */}
        <div id="demo-sec">
          <DemoForm />
        </div>
        {/* ===================demo request section end ================== */}

        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area cpt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Been Mentioned In....</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img
                      src="assets/img/inner/logo/1.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/2.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/3.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/4.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/5.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/6.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/7.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/8.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/9.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/10.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/11.jpg"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="images-slider-imgs">
                    <img
                      src="assets/img/inner/logo/1.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/2.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/3.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/4.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/5.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/6.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/7.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/8.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/9.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/10.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/11.jpg"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="images-slider-imgs">
                    <img
                      src="assets/img/inner/logo/1.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/2.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/3.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/4.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/5.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/6.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/7.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/8.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/9.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/10.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/11.jpg"
                      alt="nft constructer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpy-6">
            <div className="container">
              <div className="chainup-grid">
                <div
                  className="chainup-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src="assets/img/inner/chainup.png"
                    alt="nft constructer"
                  />
                </div>
                <div
                  className="chainup-content"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="chainup-title">
                    <p>CHAINUP</p>
                    <h2>ChainUP Data Center Worldwide</h2>
                  </div>
                  <div className="chainup-inner-grid">
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          src="assets/img/icon/client.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={500} duration={5} /> +
                        </h3>
                        <p>Served Clients</p>
                      </div>
                    </div>

                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          src="assets/img/icon/financial.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={60} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          src="assets/img/icon/crypto.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Wallet Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          src="assets/img/icon/nft.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>Crypto Exchange Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          src="assets/img/icon/region.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={160} duration={5} /> +
                        </h3>
                        <p>Liquidity Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          src="assets/img/icon/wallet.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={20} duration={5} /> +
                        </h3>
                        <p>Countries & Region </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================ChainUP section end ================== */}
        {/* ===================MARKET REPORT section  ================== */}
        <section>
          <div className="market-report-area cpy-6">
            <div className="container">
              <div
                className="section-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="chainup-title">
                  <p>MARKET REPORT</p>
                  <h2>
                    discover the latest market <br /> trends
                  </h2>
                </div>
              </div>
              <div className="market-report-grid">
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img
                        src="assets/img/icon/card.png"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Yearly NFT Market Report <br /> 2022
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="#">get the report</a>
                  </div>
                </div>
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img
                        src="assets/img/icon/card.png"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Quarterly NFT Market Report
                        <br /> 2022
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="#">get the report</a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="assets/img/inner/market-1.png"
              alt="nft constructer"
              className="bbl1"
            />
            <img
              src="assets/img/inner/market-2.png"
              alt="nft constructer"
              className="bbl2"
            />
            <img
              src="assets/img/inner/market-3.png"
              alt="nft constructer"
              className="bbl3"
            />
            <img
              src="assets/img/inner/market-4.png"
              alt="nft constructer"
              className="bbl4"
            />
            <img
              src="assets/img/inner/market-5.png"
              alt="nft constructer"
              className="bbl5"
            />
          </div>
        </section>
        {/* ===================MARKET REPORT section end  ================== */}
        {/* ===================Newsletter section  ================== */}
        <Newsletter />
        {/* ===================Newsletter section end ================== */}
        {/* ===================service section ================== */}
        <section>
          <div className="service cpy-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="sec-title">NFT Web Design Services</h2>
                <p className="sec-des">
                  If you&apos;re looking to further your business with NFT
                  options, look no further! We specialize in making digital
                  assets easy to use and accessible to users of all ages. With
                  our expertise, you&apos;ll see major success in your endeavors
                  -- whether it&apos;s a new project or something more
                  traditional such as coins, tokens, cards, and collectibles.
                </p>
              </div>

              <div className="service-grid cpt-7">
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img
                      src="assets/img/icon/innovative.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Innovative Designs</h3>
                    <p>
                      Our UI/UX developers believe in simple, innovative, and
                      immersive website and web app designing.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img
                      src="assets/img/icon/effective.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Effective Communication</h3>
                    <p>
                      To build a strong and long-term relationship with our
                      clients, we will always keep you updated.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/time.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>On-Time Delivery</h3>
                    <p>
                      Nothing is more important than launching the website or
                      web app on time, we ensure on-time delivery.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img
                      src="assets/img/icon/creativity.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Creativity</h3>
                    <p>
                      The websites or web apps designed by us are creative
                      enough to draw the attention of your users.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img
                      src="assets/img/icon/flexible.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Flexible Hiring Models</h3>
                    <p>
                      At SemiDot, we offer different business models, of which
                      you can choose the one that fits your needs.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img
                      src="assets/img/icon/certified.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Certified Designers</h3>
                    <p>
                      We have a team of certified UI/UX designers, that works
                      round the clock to make your project unique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}
        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img src="assets/imgs/decor-ball-5.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-6.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-7.png" alt="nft constructer" />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">BENIFITS OF</p>
                  <h2>NFT Developement</h2>
                  <div className="title-line"></div>
                </div>

                <div className="spider">
                  <img
                    src="assets/imgs/center-nft.png"
                    alt="nft constructer"
                    className="spider-center"
                  />

                  <div className="benefits">
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/1.png"
                          alt="nft constructer"
                        />
                        <p>Simplicity</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/5.png"
                          alt="nft constructer"
                        />
                        <p>Responsivity</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/2.png"
                          alt="nft constructer"
                        />
                        <p>Typefaces</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/6.png"
                          alt="nft constructer"
                        />
                        <p>Accessibility</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/3.png"
                          alt="nft constructer"
                        />
                        <p>Visual Hierarchy</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/7.png"
                          alt="nft constructer"
                        />
                        <p>User-Centricity</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/4.png"
                          alt="nft constructer"
                        />
                        <p>Navigability</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/img/design/8.png"
                          alt="nft constructer"
                        />
                        <p>
                          Optimize For <br /> Mobile
                        </p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <a href="#" className="carcel-btn">
                        Get NFT Solution
                      </a>
                      <a href="#" className="carcel-btn-alt">
                        Discuss Your Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===============Benefits end================== */}
        {/* =======================technologies=================
        {/* ==================Features================== */}
        <section>
          <div id="inner-area">
            <div className="features cpy-6">
              <div className="services-decor">
                <img src="assets/imgs/decor-ball-1.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-2.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-3.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-4.png" alt="nft constructer" />
              </div>
              <div className="container">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="sm-title">FEATURES OF</p>
                  <h2 className="sec-title"> NFT Development Services</h2>
                </div>

                <div
                  className="services"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="services-container">
                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/9.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/9a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Navigation</p>
                      <p>
                        The website design should be easy to navigate and the
                        menu items should easily accessible from any page.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/10.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/10a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Visual Design</p>
                      <p>
                        People are visually oriented creatures, and utilizing
                        great graphics is a good way to make your website more
                        appealing.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/11.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/11a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Content</p>
                      <p>
                        This is the backbone of your website. Not only does your
                        content play a major role in your search engine
                        placement,
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/12.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/12a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Web Friendly</p>
                      <p>
                        No matter how informative, beautiful, and easy to use
                        your website design is, it&apos;s useless unless
                        it&apos;s web-friendly.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/13.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/13a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Interaction</p>
                      <p>
                        A truly effective website design engages your visitors
                        immediately and continues to hold their attention
                        through EVERY page
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/14.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/14a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Information Accessibility</p>
                      <p>
                        Not all visitors to your website are interested in, or
                        have the time to peruse the entire site.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/15.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/15a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Intuitiveness</p>
                      <p>
                        A great website anticipates what your visitor is
                        thinking and caters directly to their needs, and has
                        elements arranged in a way that makes sense.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/16.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/16a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Branding</p>
                      <p>
                        Your website should be a direct reﬂection of your
                        business and your brand.
                      </p>
                    </div>
                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/design/17.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/design/17a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Turnaround Time</p>
                      <p>
                        The number one complaint of website design customers is
                        the time it takes to get the site up and running
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* =====================top project===================== */}

        <TopProject />
        {/* ===============top project end=============== */}
        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area cpt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Worked With</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img
                      src="assets/img/inner/logo/1.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/2.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/3.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/4.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/5.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/6.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/7.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/8.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/9.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/10.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/11.jpg"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="images-slider-imgs">
                    <img
                      src="assets/img/inner/logo/1.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/2.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/3.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/4.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/5.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/6.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/7.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/8.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/9.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/10.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/11.jpg"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="images-slider-imgs">
                    <img
                      src="assets/img/inner/logo/1.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/2.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/3.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/4.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/5.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/6.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/7.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/8.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/9.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/10.jpg"
                      alt="nft constructer"
                    />
                    <img
                      src="assets/img/inner/logo/11.jpg"
                      alt="nft constructer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* =====================happy clients======================= */}
        <Review />
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div className="faqs-section cpb-6">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="sm-title">Question & Answer</p>
              <h2 className="sec-title">Frequently Asked Questions (FAQ)</h2>
              <p className="sec-des">
                BROWSE OUR FAQ’S BELOW, IF YOU CAN NOT FIND THE ANSWER TO YOU’RE
                LOOKING FOR PLEASE CONTACT US.
              </p>
            </div>

            <div className="content">
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question1"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question1" className="question">
                    Which is the best NFT minting platform designing company?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    With no doubt NFT Constructer is the best one step NFT
                    minting platform development & designing company delivering
                    NFT Minting website development & design services worldwide
                    such as India, United states, united kingdom and much more.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question5"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question5" className="question">
                    How much does it cost to design a NFT minting website?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    The cost to develop an NFT Minting platform depends on
                    various factors such as geography, design model, resources
                    needed, time and mainly focused on the features and
                    functionalities required by the business owners on their
                    platform.The cost can vary 5000 usd to 20000 usd depeding on
                    the features and functionalities required by the business.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question2"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question2" className="question">
                    Is it completely secure?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Yes, it’s completely secure & tested before we hand over the
                    complete project to the customers.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question3"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question3" className="question">
                    Do you guys also provide after sales support?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Yes obviously we provide 15-30 days after sales support
                    after the project is completely delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}
      </div>
    </>
  );
}

Coin.layout = AppLayout;

export default Coin;
