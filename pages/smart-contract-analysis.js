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
import Link from "next/link";
import OfferA from "./inner/OfferA";
function Business() {
  const [serviceActive, setServiceActive] = useState(1);

  return (
    <>
      <Head>
        <title>smart contract analysis - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />

        <meta
          name="description"
          content="Do you want a professional smart contract analysis service? We use cutting-edge technology and a community of skilled professionals to help you."
        ></meta>
        <meta
          name="og:description"
          content="Do you want a professional smart contract analysis service? We use cutting-edge technology and a community of skilled professionals to help you."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="smart contract analysis - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/5.jpg" />
        <meta property="image" content="assets/img/meta/5.jpg" />
        <meta
          name="keywords"
          content="NFT smart contract-analysis NFT smart-contract analysis tool NFTsmart-contract analysis service"
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
      <div id="home2" className="cpy-5">
        <div className="container">
          <section className="hero">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>Decentralized Smart Contract Auditing Services</h1>

              <p className="raleway-black-16">
                At NFT CONSTRUCTER, we use cutting-edge technology and our
                skilled team of experts to offer a high level of security and
                peace of mind.
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
              <img src="assets/img/hero/website-analysis.png" alt="Hero IMG" />
              <img
                src="assets/img/hero/9.png"
                alt="nft constructer"
                className="sm-an1"
              />
              <img
                src="assets/img/hero/10.png"
                alt="nft constructer"
                className="sm-an2"
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
                      # Quick Start 1
                    </a>
                    <img
                      src="assets/img/inner/timer.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Start An exchange company In </p>
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
                      # Recomended Cash Back
                    </a>
                    <img
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Start An exchange company In </p>
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
                      # Promotion
                    </a>
                    <img
                      src="assets/img/inner/notice.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Start An exchange company In </p>
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
                      # VIP Customization
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="nft constructer" />
                  </div>
                  <p>Start An exchange company In </p>
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
                      Non-fungible tokens, also called NFTs, are digital assets
                      that one of its types can&apos;t replace. They are created
                      on decentralized blockchain platforms such as Ethereum and
                      EOS, and they can represent a wide variety of things, from
                      collectibles to securities. Because they&apos;re unique,
                      NFTs can be used to verify an asset&apos;s ownership or
                      track its history. As NFTs become more popular, there is
                      increasing demand for secure ways to store them. One way
                      to do this is through smart contract audits.
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
                <h2 className="sec-title">Smart Contract Analysis Services</h2>
                <p className="sec-des">
                  With our emphasis on top-notch service and experience, we have
                  ensured that the development of your unique NFT is a
                  successful one. We work primarily with Ethereum NFTs, which
                  are very popular in today&apos;s market. SemiDot is here to
                  help you launch your project for all your business needs.
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
                      src="assets/img/icon/contract.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Contract Clause Analysis</h3>
                    <p>
                      Identification and automated tagging and extraction of
                      specific clauses, wordings, and paragraphs (e.g. change of
                      control, forensic topics).
                    </p>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/risk.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Risk & Compliance Management </h3>
                    <p>
                      Identification and automated tagging of business-specific
                      risk patterns (e.g. animal testing in the cosmetics
                      industry)
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
                      src="assets/img/icon/spent.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Spent Analysis</h3>
                    <p>
                      Identification and automated tagging and extraction of
                      duplicate contracts (e.g. indirect purchasing)
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/reg.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Redaction (GDPR, Competitive Reg.)</h3>
                    <p>
                      Identification and automated redaction of competitive
                      sensitive information and/or information with regard to
                      GDPR requirements
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

                <div className="services">
                  <div className="services-container">
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/speed.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/speeda.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Speed</p>
                      <ul className="feature-list">
                        <li>
                          <p>Fast paced – hardly any manual processing</p>
                        </li>
                        <li>
                          <p>Limitless scalable resources</p>
                        </li>
                        <li>
                          <p>
                            Global Deloitte network facilitates processes
                            24x7/365
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/securitya.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/security.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Security</p>
                      <ul className="feature-list">
                        <li>
                          <p>
                            Deloitte data center in Germany and two-factor
                            authentication
                          </p>
                        </li>
                        <li>
                          <p>Client on premise solutions</p>
                        </li>
                        <li>
                          <p>
                            Maximum objectivity and error reduction vs. manual
                            review
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/certificat.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/3-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Certification</p>
                      <ul className="feature-list">
                        <li>
                          <p>
                            Utilization of Deloitte’s global network of lawyers
                            and subject matter experts
                          </p>
                        </li>
                        <li>
                          <p>
                            Legally compliant certifications of the analyses
                            carried out
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* ==================benefit================== */}
        <section>
          <div className="bene cpy-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">Ourt</p>
                <h2 className="sec-title">Audit Process</h2>
                <p className="sec-des">
                  A complete overview of our process for NFT smart contract
                  auditing services is as follows:
                </p>
              </div>

              <div className="benefit-container cpt-7">
                <div className="benefit-box">
                  <div
                    className="benefit-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="benefit-img">
                      <img src="assets/img/icon/4.png" alt="nft constructer" />
                    </div>
                    <div className="benefit-de">
                      <h2>Project Familiarizatio</h2>
                      <p>
                        We first take some time to know the project, its goals,
                        and how it works. This allows us to understand the code
                        and auditing process better.
                      </p>
                    </div>
                  </div>

                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="benefit-de">
                      <h2>Code Freeze</h2>
                      <p>
                        Once the code is ready for auditing, we freeze changes
                        so that no new code can be introduced during the audit.
                        This helps ensure that the audit is conducted
                        consistently.
                      </p>
                    </div>
                    <div className="benefit-img">
                      <img src="assets/img/icon/5.png" alt="nft constructer" />
                    </div>
                  </div>
                  <div
                    className="benefit-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="benefit-img">
                      <img src="assets/img/icon/6.png" alt="nft constructer" />
                    </div>
                    <div className="benefit-de">
                      <h2>Pen Testing</h2>
                      <p>
                        We also perform pen-testing on the code to help identify
                        any potential exploits that may be present.
                      </p>
                    </div>
                  </div>
                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <div className="benefit-de">
                      <h2>Final Audit Report</h2>
                      <p>
                        After the code has been fixed, we conduct a final audit
                        to ensure that the fixes have been implemented
                        correctly. Once this is complete, we issue our final
                        audit report, including our findings and
                        recommendations.
                      </p>
                    </div>
                    <div className="benefit-img">
                      <img src="assets/img/icon/7.png" alt="nft constructer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================benefit================== */}
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
                    What are the major NFT security issues and how to identify
                    them?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    When a user purchases an NFT object, he purchases its
                    identifier rather than an actual image. This unique
                    identifier leads to the Interplanetary File System and this
                    node is run by the company from which a user purchases an
                    NFT. So, in case the company that is minting NFTs
                    experiences a serious hack or decides to exit from the
                    market, a user will lose access to his NFT object or there
                    is a risk that the value of the purchased NFT may drop to
                    zero.
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
                    Is NFT Smart Security Audit works as NFT Hack Protection ?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Yes, like other virtual assets, NFTs can be stolen. Smart
                    contract vulnerabilities may enable a malicious actor to
                    mint NFTs without the consent of a marketplace. Through
                    social engineering techniques, malicious actors can make
                    users transfer their NFTs to malicious addresses.
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
                    Whats the best solution for NFT Hacks?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    During the smart contract audit of an NFT project, auditors
                    test the code against such flaws as denial of service
                    attacks, gas limit issues, reentrancy attacks, insecure
                    random number generation, overflows and underflows, etc.
                    Each identified vulnerability is given its severity level so
                    that a project can realize what issue to fix immediately.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question3"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question3" className="question">
                    IS Smart Contract Audit for really important for a NFT
                    project?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Smart contract audit allows a project to identify any
                    features in the code that may potentially enable
                    manipulations resulting in the damaged reputation of loss of
                    assets. A smart contract audit may allow the code to work
                    more efficiently thereby allowing a project to demonstrate
                    higher performance.
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
Business.layout = AppLayout;

export default Business;
