import { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import TopProject from "./inner/TopProject";
import DemoForm from "./inner/demoform";
import Newsletter from "./inner/Newsletter";
import Head from "next/head";
import Review from "./inner/Review";
import Link from "next/link";
import OfferA from "./inner/OfferA";
function HiCoin() {
  const [service, setService] = useState(1);

  return (
    <>
      <Head>
        <title>Nft Website Development Services - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="description"
          content="We develop a cutting-edge minting platform using blockchain technology that will support the growth of the gaming, real estate, and art sectors. Looking for information about websites for NFT minting?"
        ></meta>
        <meta
          name="og:description"
          content="We develop a cutting-edge minting platform using blockchain technology that will support the growth of the gaming, real estate, and art sectors. Looking for information about websites for NFT minting?"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Nft Website Development Services - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/2.jpg" />
        <meta property="image" content="assets/img/meta/2.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development, NFT marketplace development, NFT Website Design"
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
      <div id="hiCoin" className="cpy-5">
        <div className="decor-balls">
          <img src="assets/imgs/decor-ball-1.svg" alt="nft constructer" />
          <img src="assets/imgs/decor-ball-3.svg" alt="nft constructer" />
        </div>
        <div className="container">
          <section className="hero cpy-5">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>Top Notch NFT Development Company</h1>

              <p className="raleway-black-16">
                Add some distinctive value to your content with a non-fungible
                token platform that provides security and features for
                users&apos; trading experiences.
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
              data-aos-duration="2000"
            >
              <img
                src="assets/imgs/hero-img-6.png"
                alt="Hero IMG"
                className="hero-img-5"
              />

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
              <img
                src="assets/imgs/wheel.svg"
                alt="nft constructer"
                className="wheel"
              />
              <img
                src="assets/imgs/decor-4.png"
                alt="nft constructer"
                className="decor-4"
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
                      # Project&apos;s Confidentiality
                    </a>
                    <img
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>All of Your Information Is Secure </p>
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
                      Are you in search of a platform to develop your own NFTs?
                      NFT marketplaces built by us are feature-rich,
                      decentralized, and facilitate tokenization of all kinds of
                      assets - including artwork, collectibles, software
                      licenses, digital collectibles, and real-world assets.
                      With expertise in NFT token development services, you get
                      to earn royalties whenever a token is sold on your
                      website. Rather than working with intermediaries like
                      other companies do, we offer non-fungible token
                      development services direct from our website. You can
                      design NFTs for any kind of item unique to your business
                      or provide them on a primary online platform through our
                      development team.
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
              <div className="section-title">
                <p className="sm-title">OUR NON FUNGIBLE</p>
                <h2 className="sec-title">Token Development Services</h2>
                <p className="sec-des">
                  Especially in the market for Ethereum-based digital assets,
                  SemiDot is a top company. We&apos;re excited to help you
                  tokenize your ideas. In addition to that, our other services
                  vary. We work with major platform users and are experienced in
                  developing NFTs that can best serve your needs and goals.
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
                      src="assets/img/icon/minting.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>NFT Minting Platform Development</h3>
                    <p>
                      Give your non-tech users a good start for NFT trading and
                      investment. Build an NFT minting platform with SemiDot
                      where there is no need for knowledge of coding and
                      technology. Let your user mint a new token without
                      worrying about the underlying blockchain story.
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
                      src="assets/img/icon/smart-contract.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>NFT Smart Contract Development</h3>
                    <p>
                      The core processing NFTs are developed for storing the
                      information. Assuring the immutability and transparency of
                      the information, NFT smart contract developed by Semidot
                      is best for controlling the digital asset. Join the wagon
                      and step forward with the successful development.
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
                      src="assets/img/icon/crypto.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Crypto Collectibles</h3>
                    <p>
                      Bring the attestation of ownership for digital products.
                      Sell and earn the royalty of your artwork resale. SemiDot
                      understands your requirements, and with the glitch proof,
                      you can own digital assets and assign them to your name.
                      The ownership of the asset is immutable using NFT.
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
                      src="assets/img/icon/exchange.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>NFT Exchange Development</h3>
                    <p>
                      We provide Blockchain-enabled secured NFT exchange
                      development services for selling, trading, and exchanging
                      NFT tokens. Let creators explore the plethora of revenue
                      streams by minting the creation and selling them. Also,
                      your NFT exchange could be the next great possibility for
                      investors.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/open.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Open Trading Place</h3>
                    <p>
                      Build an open marketplace with exchanges and order books.
                      Users can sell, buy, or trade crypto assets. Reliable
                      association with SemiDot can give a good beginning,
                      development, and smooth procurement to the task. We are
                      one of the best in Open trade place development.
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
                      src="assets/img/icon/identity.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Identity Management with NFT</h3>
                    <p>
                      Leverage the uniqueness of NFTs for identity management.
                      Every token has a unique value and is owned by a
                      particular entity. Find the best possible opportunities
                      with NFT using the seamless development skills of the
                      SemiDot team. NFTs are considered best for micromanaging
                      scattered things.
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
                      src="assets/img/icon/asset.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Asset Lifecycle Management</h3>
                    <p>
                      Build a simple medium to prove the ownership of things.
                      Try asset life-cycle management services from SemiDot and
                      enjoy the hassle-free life-cycle. NFTs for buying and
                      selling any physical or digital asset. You can transfer
                      ownership of the token to any other user, and trade your
                      assets in a jiff.
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
                      src="assets/img/icon/software.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Software License Management</h3>
                    <p>
                      Manage the software license through NFT numbers. NFTs are
                      authenticated by the owner of the software and are
                      transferable too. Similar to other assets, your software
                      could be secure with non-fungible tokens and are ready to
                      be traded in the marketplace. Ensure the safe ground with
                      SemiDot Infotech.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/real.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Real Estate Tokenization</h3>
                    <p>
                      Amaze your audience and build a strong future for the Real
                      estate world. Take real estate space to the next level
                      using NFT. Take the virtual ownership of the land and list
                      it on the market to attract the audience. SemiDot is an
                      award-winning blockchain development team with accolades
                      for breach-proof development.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/peer.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>Peer to Peer Exchange</h3>
                    <p>
                      NFT platform for establishing the reliable NFT community.
                      You can trade a variety of NFTs with third-party wallet
                      integration. Always select the NFT development company
                      which has a proven record of P2P crypto exchange
                      development with reliable security standards. Build a safe
                      crypto exchange with SemiDot Infotech.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/ipo.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>IPO Development</h3>
                    <p>
                      Launch your NFT business with a fundraising NFT platform.
                      You can build an NFT poster with a QR code linked to
                      Etherscan or Blockchain. The most advanced IPO development
                      service ensures your groundbreaking presence in the market
                      and impressive deals. Choose us because we are the best at
                      IPO development.
                    </p>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img src="assets/img/icon/nft.png" alt="nft constructer" />
                  </div>
                  <div className="service-content">
                    <h3>NFT Maintenance & Support</h3>
                    <p>
                      With a wide range of services, SemiDot provides continuous
                      support and maintenance for client projects. We are best
                      at project procurement and hassle-free upgrades to the
                      latest versions. Alongside, smooth migration is our forte
                      for your first digital attempt.
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
        {/* ===================development track ================== */}
        <section>
          <div className="development-track cpt-6" id="nft-development">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">best services</p>
                <h2 className="sec-title">NFT Development Tech Stack</h2>
                <p className="sec-des">
                  As a leading NFT marketplace development company, semiDot is
                  highly innovative and works with advanced technologies.
                </p>
              </div>
              <div
                className="options"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  className={service === 1 ? "option active" : "option"}
                  onClick={() => {
                    setService(1);
                  }}
                >
                  <p>BlockChain Platform</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 2 ? "option active" : "option"}
                  onClick={() => {
                    setService(2);
                  }}
                >
                  <p>Storage Platform</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 3 ? "option active" : "option"}
                  onClick={() => {
                    setService(3);
                  }}
                >
                  <p>NFT Standards</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 4 ? "option active" : "option"}
                  onClick={() => {
                    setService(4);
                  }}
                >
                  <p>Front End Frameworks</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 5 ? "option active" : "option"}
                  onClick={() => {
                    setService(5);
                  }}
                >
                  <p>Programming Languages</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 6 ? "option active " : "option"}
                  onClick={() => {
                    setService(6);
                  }}
                >
                  <p>Cloud Platforms</p>
                  <img
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
              </div>
              <div className="" data-aos="fade-up" data-aos-duration="1000">
                <div className={service === 1 ? "coins active" : "coins"}>
                  <div className="eth">
                    <img src="assets/imgs/etherium.png" alt="Etherium" />
                    <p>Ethereum</p>
                  </div>
                  <div className="tezos">
                    <img src="assets/imgs/tezos.png" alt="Etherium" />
                    <p>Tezos</p>
                  </div>
                  <div className="wax">
                    <img src="assets/imgs/wax.png" alt="Etherium" />
                    <p>Wax</p>
                  </div>
                  <div className="cortana">
                    <img src="assets/imgs/cortana.png" alt="Etherium" />
                    <p>Cortana</p>
                  </div>
                  <div className="hyperledger">
                    <img src="assets/imgs/hyperledger.png" alt="Etherium" />
                    <p>Hyperledger</p>
                  </div>
                  <div className="multichain">
                    <img src="assets/imgs/multichain.png" alt="Etherium" />
                    <p>Multichain</p>
                  </div>
                </div>
                <div className={service === 2 ? "coins active" : "coins"}>
                  <div className="ipfs">
                    <img src="assets/img/icon/ipfs.png" alt="Etherium" />
                    <p>IPFS</p>
                  </div>
                  <div className="filecoin">
                    <img src="assets/img/icon/file-coin.png" alt="Etherium" />
                    <p>File Coin</p>
                  </div>
                  <div className="couchbd">
                    <img src="assets/img/icon/couchbd.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                </div>
                <div className={service === 3 ? "coins active" : "coins"}>
                  <div className="eth">
                    <img src="assets/imgs/etherium.png" alt="Etherium" />
                    <p>ERC-721A</p>
                  </div>
                  <div className="eth">
                    <img src="assets/imgs/etherium.png" alt="Etherium" />
                    <p>ERC-1155</p>
                  </div>
                  <div className="tezos">
                    <img src="assets/imgs/tezos.png" alt="Etherium" />
                    <p>Tezos</p>
                  </div>

                  <div className="dgoods">
                    <img src="assets/img/icon/dgoods.png" alt="Etherium" />
                    <p>Dgoods</p>
                  </div>
                  <div className="trc">
                    <img src="assets/img/icon/trc.png" alt="Etherium" />
                    <p>Trc-721</p>
                  </div>
                  <div className="dgoods">
                    <img src="assets/img/icon/bep.png" alt="Etherium" />
                    <p>Bep-20</p>
                  </div>
                  <div className="rust">
                    <img src="assets/img/icon/rust.png" alt="Etherium" />
                    <p>Rust Programing</p>
                  </div>
                </div>

                <div className={service === 4 ? "coins active" : "coins"}>
                  <div className="vue">
                    <img src="assets/img/icon/vuejs.png" alt="Etherium" />
                    <p>Vue Js</p>
                  </div>
                  <div className="angular">
                    <img src="assets/img/icon/angular.png" alt="Etherium" />
                    <p>Angular</p>
                  </div>
                  <div className="react">
                    <img src="assets/img/icon/react.png" alt="Etherium" />
                    <p>React</p>
                  </div>
                  <div className="kafka">
                    <img src="assets/img/icon/cafca.png" alt="Etherium" />
                    <p>Kafka</p>
                  </div>
                  <div className="couchdb">
                    <img src="assets/img/icon/couchdb.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                  <div className="couchdb2">
                    <img src="assets/img/icon/couchdb-2.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                </div>

                <div className={service === 5 ? "coins active" : "coins"}>
                  <div className="kafka">
                    <img src="assets/img/icon/solidity.png" alt="Etherium" />
                    <p>Solidity</p>
                  </div>
                  <div className="angular1">
                    <img src="assets/img/icon/angular1.png" alt="Etherium" />
                    <p>Angular</p>
                  </div>
                  <div className="react">
                    <img src="assets/img/icon/c++.png" alt="Etherium" />
                    <p>C++</p>
                  </div>
                  <div className="react">
                    <img src="assets/img/icon/c.png" alt="Etherium" />
                    <p>C</p>
                  </div>
                  <div className="couchdb">
                    <img src="assets/img/icon/couchdb.png" alt="Etherium" />
                    <p>CouchDB</p>
                  </div>
                  <div className="php">
                    <img src="assets/img/icon/php.png" alt="Etherium" />
                    <p>PHP</p>
                  </div>
                </div>

                <div className={service === 6 ? "coins active" : "coins"}>
                  <div className="aws">
                    <img src="assets/img/icon/aws.png" alt="Etherium" />
                    <p>aws</p>
                  </div>
                  <div className="ibm">
                    <img src="assets/img/icon/ibm.png" alt="Etherium" />
                    <p>IBM BLUEMIX</p>
                  </div>
                  <div className="rass">
                    <img src="assets/img/icon/rass.png" alt="Etherium" />
                    <p>Eth rass</p>
                  </div>
                  <div className="kaleido">
                    <img src="assets/img/icon/kaleido.png" alt="Etherium" />
                    <p>Kaleido Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================development track end ================== */}
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
                        <p>Data Center Worldwide</p>
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
                          <CountUp end={100} duration={5} /> +
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
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>NFT Service Client</p>
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
                        Yearly NFT Market Report
                        <br /> 2022
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
                        Quarterly NFT Market Report <br /> 2022
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
                <div className="section-title">
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
                          src="assets/imgs/paper.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/paper-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Standardization</p>
                      <p>
                        You can create reusable, inheritable, and common
                        standards for all NFTs. Begin token standardization of
                        collectibles.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/imgs/chart-99.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/chart-99-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Marketplace</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img src="assets/imgs/hand.png" alt="nft constructer" />
                        <img
                          src="assets/imgs/hand-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Ownership</p>
                      <p>
                        NFT tokens are immutable ownership of antique
                        collectibles that eliminate unauthorized changes
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/imgs/hammer.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/hammer-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Bidding</p>
                      <p>
                        Trade in multiple marketplaces and bid over them to take
                        part in the trade.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/imgs/trace.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/trace-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Traceability</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/imgs/rocket.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/rocket-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>New Project</p>
                      <p>
                        Wallet providers are eyeing every new project arriving
                        in the NFT marketplace. Enjoy smooth trade.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/imgs/circles.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/circles-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Tracking</p>
                      <p>
                        You can track the owner of any asset and avoid
                        third-party verification requirements.You can also track
                        traffic & sales analytics.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          src="assets/imgs/goverment.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/imgs/goverment-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Governance Attributes</p>
                      <p>
                        Users can vote on upgrades of the platform developed by
                        a Governance attribute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* ===================Newsletter section  ================== */}
        <Newsletter />
        {/* ===================Newsletter section end ================== */}
        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img src="assets/imgs/decor-ball-5.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-6.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-7.png" alt="nft constructer" />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">BENIFITS OF</p>
                  <h2>NFT Development</h2>
                  <div className="title-line"></div>
                </div>

                <div
                  className="spider"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src="assets/imgs/center-nft.png"
                    alt="nft constructer"
                    className="spider-center"
                  />

                  <div className="benefits">
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/liquidity.png"
                          alt="nft constructer"
                        />
                        <p>NFT Liquidity</p>
                      </div>
                      <div className="benefit-box">
                        <img src="assets/imgs/gas.png" alt="nft constructer" />
                        <p>Lowest Gas Price</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/marketplace.png"
                          alt="nft constructer"
                        />
                        <p>Multi-Chain NFT Marketplace</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/smart-contract.png"
                          alt="nft constructer"
                        />
                        <p>
                          Smart contract <br /> Audited NFT
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/stakling.png"
                          alt="nft constructer"
                        />
                        <p>NFT Staking</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/lending.png"
                          alt="nft constructer"
                        />
                        <p>NFT Lending</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/launchpad.png"
                          alt="nft constructer"
                        />
                        <p>NFT Launch Pad</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/auction.png"
                          alt="nft constructer"
                        />
                        <p>Bidding & Auction</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/ownership.png"
                          alt="nft constructer"
                        />
                        <p>Fractional Ownership</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/minting.png"
                          alt="nft constructer"
                        />
                        <p>Lazy Minting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===============Benefits end================== */}

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
                    What is an NFT minting platform?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    NFT Minting platform is a website where users can mint their
                    various digital assets such as artwork,music,video,game
                    items NFT etc digital collectibles. While minting an NFT
                    users have to pay a gas fee based on the blockchain and
                    platform they wish to mint their NFTs.
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
                    How to create a NFT Minting website?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    You can either create an NFT minting website with the use of
                    ready made White label NFT minting software which can reduce
                    the development cost and time. You just need to buy an NFT
                    minting software, customize it based on your business niche
                    requirements and launch it. You can also create an nft
                    minting website from scratch which requires a lot of time
                    and development cost.
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
                    Which is the best NFT minting platform development company?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    With no doubt NFT Constructer is the best one step NFT
                    minting platform development company delivering NFT Minting
                    website development services worldwide such as India, United
                    states, united kingdom and much more.
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
                    How much does it cost to create a NFT minting website?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    The cost to develop an NFT Minting platform depends on
                    various factors such as geography, development model,
                    resources needed, time and mainly focused on the features
                    and functionalities required by the business owners on their
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
                  id="question4"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question4" className="question">
                    Is it completely secure?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Yes, its completely secure & tested before we hand over the
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
                  id="question7"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question7" className="question">
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
HiCoin.layout = AppLayout;

export default HiCoin;
