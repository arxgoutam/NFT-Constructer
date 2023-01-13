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
function Analysis() {
  const [serviceActive, setServiceActive] = useState(1);

  return (
    <>
      <Head>
        <title>Nft Website Analysis - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/website-analysis"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/website-analysis"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="Uncover Vulnerabilities On Your Non-Fungible Token Platform Protecting your systems is a far less daunting task when you have a team of cyber experts for your nft minting website or marketplace."
        ></meta>
        <meta
          name="og:description"
          content="Uncover Vulnerabilities On Your Non-Fungible Token Platform Protecting your systems is a far less daunting task when you have a team of cyber experts for your nft minting website or marketplace."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Nft Website Analysis - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/6.jpg" />
        <meta property="image" content="assets/img/meta/6.jpg" />
        <meta
          name="keywords"
          content="Nft website analysis Audit NFT Website NFT Website Auditing"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
        <OfferA />
      </noscript>
      <div id="Analysis" className="cpt-5">
        <div className="decor-balls">
          <img src="assets/imgs/boll-1.png" alt="Ball" />
          <img src="assets/imgs/ball-2.png" alt="Ball" />
          <img src="assets/imgs/ball-3.png" alt="Ball" />
          {/* <img src="assets/imgs/ball-4.png" alt="Ball" /> */}
        </div>
        <div className="container">
          <section className="hero">
            <div
              className="decor-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="assets/imgs/decor-1.png" alt="nft constructer" />
              <img
                src="assets/img/hero/3.png"
                alt="nft constructer"
                className="decor-2"
              />
              <img
                src="assets/img/hero/4.png"
                alt="nft constructer"
                className="decor-3"
              />
            </div>
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Uncover Vulnerabilities On Your Non-Fungible
                <span> Token Platform</span>
              </h1>

              <p className="raleway-black-16">
                Protecting your systems is a far less daunting task when you
                have a team of cyber experts.
              </p>

              <div className="hero-btns">
                <a href="#get-quoted" className="btn-hero-1">
                  Get Started
                </a>
              </div>
            </div>

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="assets/imgs/hero-img-3.png" alt="Hero IMG" />

              <div className="charts-container">
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
              </div>
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
                  <p>Our developers are there to support you 24*7</p>
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
                      While we now live in the digital era, it&apos;s not
                      impossible to fall prey to cyber threats. Our Security
                      Testing suite can help minimize false positives and secure
                      your business from anybody looking to take advantage of
                      your non-fungibility token business model and systems.
                      We&apos;ll find any weaknesses in your digital
                      infrastructure and recommend actions to prevent a cyber
                      breach before too much damage is done. Our team of
                      cyber-security experts can help you validate
                      vulnerabilities, bug exploitation probability, and
                      plausible actions that could be taken against an attacker
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

        {/* ===================service section ================== */}
        <section>
          <div className="service cpy-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">OUR NON FUNGIBLE</p>
                <h2 className="sec-title">
                  What does NFT Constructer do in a Website Analysis Service?
                </h2>
                <p className="sec-des">
                  At NFT Constructer, In order to make a website truly
                  one-of-a-kind, we take into account the nature and behavior of
                  each element of the website, as well as its interaction with
                  other elements. As an intellectual process, we consider these
                  5 areas when creating custom websites for our customers
                </p>
              </div>

              <div className="service-grid cpt-7">
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/8.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Content</h3>
                    <p>
                      Does the language you have used is user-friendly? Does
                      your website have a unique content? Since it is quite
                      important to have a unique content, we do analyze the
                      website content also.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/9.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>SEO</h3>
                    <p>
                      Does your website have the target keywords? Does your
                      website have alt tags on images? How old is your domain?
                      Who is your true competitor and who is partial? There are
                      number of factors which we analyze in this section and
                      recommend the client to apply in their website, Just give
                      a try to our Website Analysis Service now!
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/10.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Technical</h3>
                    <p>
                      How much time is your website taking for loading in search
                      engines? Does your website have the high quality
                      standards? Does your website have the competitive aspects?
                      We analyze all these factors and tell the client what is
                      missing from these technical issues on the website.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/11.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Design</h3>
                    <p>
                      In order to make a website SEO- friendly we should focus
                      on the website design as well. Does the design deliver the
                      appropriate level of effectiveness, sophistication and
                      accessibility in the market area? We analyze the design
                      responses of both the website and the user.The SEO’s
                      approachable design can ensure royal customers and also
                      excellent brand image of the business.
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/12.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Usability</h3>
                    <p>
                      Can the website visitors find the same information on all
                      the browsers? Does your website help the visitor to
                      properly navigate place-to-place? Does the visitor
                      properly interact with you by using forms or through
                      emails? We analyze such important factors for your
                      website. If a website is leading in the usability factor
                      then it can surpass many other websites in the race of
                      ranking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area"
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
                        Yearly NFT Market Report <br /> 2021
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
                        Quarterly NFT Market Report <br /> 2021
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

        {/* =====================top project===================== */}
        <TopProject />
        {/* ===============top project end=============== */}

        {/* ===================Mentioned section ================== */}
        <section>
          <div
            className="mentioned-area"
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
        <div
          className="faqs-section cpb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="section-title">
              <p className="sm-title">Question & Answer</p>
              <h2 className="sec-title">Frequently Asked Questions (FAQ)</h2>
              <p className="sec-des">
                BROWSE OUR FAQ’S BELOW, IF YOU CAN NOT FIND THE ANSWER TO YOU’RE
                LOOKING FOR PLEASE CONTACT US.
              </p>
            </div>

            <div className="content">
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question1"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question1" className="question">
                    How much does it cost for a complete audit of a NFT
                    website??
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our quotes and turnaround times vary according to the
                    codebase’s length and complexity.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question5"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question5" className="question">
                    Is it completely safe??
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    We provide confidential initial reports, web hosted public
                    final certificates for easy sharing with stakeholders, and
                    also formally written letters for compliance departments to
                    confirm the results of a security audit.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question2"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question2" className="question">
                    What is your audit process?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Organize a kick-off meeting and provide a quote then we
                    privately send your team a detailed audit report.After your
                    team fixes the issues and best practices then we will you an
                    updated audit report and certificate
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

Analysis.layout = AppLayout;

export default Analysis;
