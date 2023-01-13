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
function SmartContract() {
  const [service, setService] = useState(1);

  return (
    <>
      <Head>
        <title>
          Decentralized Smart Contract Development Services - Nft Constructer
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/smart-contract"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/smart-contract"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="We help you to build your Decentralized Smart Contract on popular blockchain platforms including Ethereum, TRON, EOS, Bitcoins, Binance Chain, Polygon, Solana, etc."
        ></meta>
        <meta
          name="og:description"
          content="We help you to build your Decentralized Smart Contract on popular blockchain platforms including Ethereum, TRON, EOS, Bitcoins, Binance Chain, Polygon, Solana, etc."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Decentralized Smart Contract Development Services - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/4.jpg" />
        <meta property="image" content="assets/img/meta/4.jpg" />
        <meta
          name="keywords"
          content="NFT Smart Contract Development NFT smart contract Best Smart Contract Developer"
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
      <div id="home3" className="cpy-5">
        <div className="container">
          <section className="hero">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Decentralized Smart
                <span> Contract</span>
                <br /> Development
              </h1>

              <p className="raleway-black-16">
                With over 10 billion in on-chain value, we&apos;ve worked on a
                variety of projects for over ten years. We&apos;re skilled smart
                contract developers who are prepared to help with the
                development of your blockchain project.
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
                src="assets/img/hero/smart-contract-dev.png"
                alt="nft constructer"
                className="hero-bg"
              />
              <img
                src="assets/img/hero/5.png"
                alt="nft constructer"
                className="contract1"
              />
              <img
                src="assets/img/hero/6.png"
                alt="nft constructer"
                className="contract2"
              />
              <img
                src="assets/img/hero/7.png"
                alt="nft constructer"
                className="contract3"
              />
              <img
                src="assets/img/hero/8.png"
                alt="nft constructer"
                className="contract4"
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
                  <p>Most Realiable Developers</p>
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
                  <p>Clients say the team feels like their employees. </p>
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
                      Being a Non Fungible Token & Blockchain Smart Contract
                      Creator, we help you to create the best NFT smart
                      contracts that could automate the complete execution of an
                      established agreement such that all signatories are
                      notified immediately of the outcome which is backed by
                      blockchain technologies. We have made sure your tokens are
                      developed correctly when building the contract from start
                      to finish. Our team has experience developing
                      blockchain-related apps, so you can trust our work with
                      your assets.
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
        {/* ===================development track ================== */}
        <section>
          <div className="development-track cpb-6" id="nft-development">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">best services</p>
                <h2 className="sec-title">NFT Development Tech Stack</h2>
                <p className="sec-des">
                  SemiDot is a leading NFT marketplace development company. We
                  are highly innovative & work with advanced technologies.
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
                  <div className="mangodb">
                    <img src="assets/img/icon/mangodb.png" alt="Etherium" />
                    <p>MangoDB</p>
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
        {/* ==================Features================== */}
        <section>
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
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
                  <h2 className="sec-title">
                    Smart Contract Development Services
                  </h2>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/1.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/1-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Smart Contract Development</p>
                      <p>
                        We help you to build your unalterable smart contract on
                        popular blockchain platforms including Ethereum, TRON,
                        EOS, Bitcoins, Binance Chain, Polygon, Solana, etc.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/2.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/2-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Smart Contract Audit</p>
                      <p>
                        Security is critical in the development of blockchain.
                        Our comprehensive smart contract audit service helps
                        startups and enterprises to launch and maintain their
                        NFT platforms.
                      </p>
                    </div>
                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/3.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/3-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>NFT(ERC721 & ERC1155) Development</p>
                      <p>
                        With our NFT Development Services, you get end-to-end
                        NFT solutions so you can create scalable NFT creation
                        system and marketplaces for transactions.
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
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img src="assets/imgs/decor-ball-5.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-6.png" alt="nft constructer" />
                <img src="assets/imgs/decor-ball-7.png" alt="nft constructer" />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">Types OF</p>
                  <h2> Smart Contract Development Services</h2>
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
        {/* ==================benefit================== */}
        <section>
          <div className="bene cpy-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">BENIFITS OF</p>
                <h2 className="sec-title">
                  Smart Contract Development Services
                </h2>
                <p className="sec-des">
                  Our unique approach of developing smart contrats gives
                  businesses the confidenceof bigger investment3. in blockchain
                  technology.
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
                      <h2>Secure & Safe</h2>
                      <p>
                        We offer highly secured protection against malicious
                        activities and fraud in the NFT craze.
                      </p>
                    </div>
                  </div>

                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="benefit-de">
                      <h2>Customized Solutions</h2>
                      <p>
                        Our NFT Marketplaces can be compatible with different
                        devices (e.g. PCs, smartphones, tablets)
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
                      <h2>Highly Scalable</h2>
                      <p>
                        We will design a NFT Marketplace that can cope with
                        newly added listings and an expanding pool of customers
                      </p>
                    </div>
                  </div>
                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <div className="benefit-de">
                      <h2>Post-launch Support</h2>
                      <p>
                        TokenMinds believes in customer satisfaction and hence
                        we provide ongoing support even after deployment.
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
                    What is an NFT Smart Contract?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    NFT Smart contract is a trading agreement between the NFT
                    buyer and the NFT seller that is written in coded language.
                    Usually, these NFT smart contracts are developed on the
                    blockchain, they are the set of programs that manage the
                    data of the NFT owners and the transaction history of NFTs
                    between the traders. Basically smart contracts access the
                    entire action of transfers only when predominant conditions
                    are met.
                  </p>
                  <p>
                    NFT Smart Contracts are the most vibrant part of the NFT
                    marketplace as the entire functioning of the platform relies
                    on self-executing smart contracts. The NFT Smart contracts
                    contain the codes that manage the creation and minting of
                    NFTs. Once a user creates or mints NFTs these NFT smart
                    contracts get triggered and automatically executed. Usually,
                    NFT standards like ERC-721, ERC-1155, BEP-721, BEP-1155, etc
                    are preferred for creating NFT smart contracts.
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
                    How does NFT Smart Contract Work?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    NFT platforms are working based on smart contracts (that is
                    self-executing contracts). Features and functionalities of
                    the NFT platforms are stored in the form of programs that
                    run when it meets a predetermined condition. New smart
                    contracts are deployed for individual tokens and store the
                    metadata of NFT tokens.&nbsp;
                  </p>
                  <p>
                    Most NFTs was built on the Ethereum blockchain using the
                    ERC721 protocol and Ethereum was preferred to develop NFT
                    smart contract likewise smart contracts can be built on any
                    blockchain like BSC, Solana, Tron, Polygon, Avalanche,
                    etc.&nbsp;
                  </p>
                  <p>
                    <b>Step 1:</b> While minting an NFT they execute programs
                    stored in a smart contract that confirms different
                    standards.
                  </p>
                  <p>
                    <b>Step 2:</b> The information about NFT and NFT owner is
                    put on in blockchain where NFT is managed. This verifies the
                    ownership of the NFT to the creator.
                  </p>
                  <p>
                    <b>Step 3:</b> You can set the minting and bidding value as
                    your wish in the smart contract code further will execute
                    when the conditions are held.
                  </p>
                  <p>
                    <b>Step 4:</b> Smart contracts will handle the
                    transferability when NFT is transferred from one to another.
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
                    5 Important Benefits of NFT Smart Contract
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    We all are very well known for the hype for NFT and how it
                    has taken NFT investors to the next financial level. Lets us
                    know about the benefits of the NFT Smart Contract,
                  </p>
                  <p>1. Functions are immutable.</p>
                  <p>2. Reduces the gas fee.</p>
                  <p>3. Fast transactions.</p>
                  <p>4. Fully Automated.</p>
                  <p>5. Resist hackers.</p>
                  <p>
                    On the whole, smart contracts are the main blocks of the
                    NFT. Eliminating the lack of trust which might be capable
                    while executing with others, is by and large the thing that
                    smart contracts do.
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
                    NFT Smart Contract Development
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    The NFT Smart contract development has become a massive
                    opportunity for the NFT investors to build up their own NFT
                    marketplace and provide a chance to higher their revenue. As
                    the complete functioning of the NFT marketplace depends on
                    the NFT smart contracts, NFT smart contract development
                    becomes more vital among entrepreneurs who are actively
                    looking to build an NFT Marketplace. If you are one among
                    them, you are in the right place!
                  </p>
                  <p>
                    NFT Constructer is the leading NFT Smart Contract
                    Development Company expert in developing NFT Smart Contracts
                    on various blockchain networks. Our NFT Smart Contract
                    Developers provide best-in-class NFT Smart Contract
                    development on various blockchains such as Ethereum, Binance
                    Smart Chain (BSC), Solana, Polygon, Cardano, Avalanche, etc.
                    We are recognized as a trustworthy agency in the creation of
                    Custom NFT Smart Contracts according to the client&nbsp;s
                    business needs.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question14"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question14" className="question">
                    NFT Smart Contract Development Services
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Being the pioneer in NFT Smart Contract development
                    services, NFT Constructer offers top-rated NFT Smart
                    Contract development to create NFT smart contracts that
                    support the trade of various NFT digital collectibles.&nbsp;
                  </p>
                  <p>1. NFT Smart Contract for Marketplace</p>
                  <p>2. NFT Smart Contract for Minting</p>
                  <p>3. NFT Smart Contract for Staking</p>
                  <p>4. NFT Smart Contract for Lending</p>
                  <p>5. NFT Smart Contract for Loan&nbsp;</p>
                  <p>6. NFT Smart Contract for P2P Exchange</p>
                  <p>7. NFT Smart Contract for Digital collectibles</p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question4"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question4" className="question">
                    Important NFT Smart Contract Use Cases
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    We provide top-notch NFT Smart Contract Development for
                    various use cases such as sports, art, videos, games,
                    sports, metaverse, music, fashion industry, etc.
                  </p>
                  <p>
                    <b>
                      <span>Art</span>
                    </b>
                  </p>
                  <p>
                    The development of the NFT Smart Contracts for Art
                    Marketplace is the process of converting artworks into NFTs
                    that can be traded on the NFT Marketplace. It is beneficial
                    for the artist to get more popularity and
                    profitability.&nbsp;
                  </p>
                  <p>
                    <b>
                      <span>Games</span>
                    </b>
                  </p>
                  <p>
                    NFT games make it possible to earn NFTs instead of actual
                    money. The NFT gaming marketplace has a huge following. The
                    NFT marketplace will make the cost of game assets
                    transparent. The game&nbsp;s revenue will be transparent to
                    the games industry. So, contribution rewards for gamers in
                    NFTs are made easier.
                  </p>
                  <p>
                    <span>
                      <b>Music</b>
                    </span>
                  </p>
                  <p>
                    NFT Smart Contract development for the Music creates a
                    marketplace platform to sell their music and audios. NFT
                    marketplace for music provides huge profits in the music
                    business through its amazing capabilities. Artists hold the
                    rights to their music with the help of private keys.&nbsp;
                  </p>
                  <p>
                    <b>
                      <span>Sports</span>
                    </b>
                  </p>
                  <p>
                    NFT Marketplace for Sports gives a huge sporting future.
                    Audiences have begun to appreciate sporting events in NFT,
                    and sports enthusiasts will undoubtedly smile. Here, people
                    can tokenize their sports assets with the aid of NFT smart
                    contracts for Sports.
                  </p>
                  <p>
                    <b>
                      <span>Digital Collectibles</span>
                    </b>
                  </p>
                  <p>
                    Development of the NFT Marketplace for Digital Collectibles
                    delivered exclusively for a platform that allows users to
                    trade digital collectibles and goods. We can get rare
                    digital items and crypto-collectibles from the peer-to-peer
                    platform. Cryptopunk NFT platform is one of the most popular
                    digital collectibles platforms. Digital collectibles include
                    such as videos, audio, pictures, and GIFs.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question7"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question7" className="question">
                    NFT Smart Contract Development Process
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    NFTs are created using smart contracts. Smart contracts
                    operate on the blockchain and store the unique information
                    of the token. It keeps track of the current owner and the
                    previous owner.
                  </p>
                  <p>
                    <b>
                      Here are some basic Steps of NFT Smart Contract
                      Development,
                    </b>
                  </p>
                  <p>1. Setting up the project tools and environment</p>
                  <p>2. Coding the smart contract</p>
                  <p>3. Deploying and interacting on testnet</p>
                  <p>4. Testing smart contract&nbsp;</p>
                  <p>5. Deploying on mainnet</p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question8"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question8" className="question">
                    Setting up the Project
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    We should have a detailed analysis with the expert
                    professionals about the project, that the first step in
                    setting a project is to select the desired blockchain to
                    develop the smart contract and NFTs.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question9"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question9" className="question">
                    Coding NFT Smart Contracts:
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    To develop the project the main key is a smart contract,
                    these codes are written using solidity language basically
                    but the language changes depending on the selection of the
                    blockchain. As the project grows wider we can add additional
                    smart contracts as per your plan.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question10"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question10" className="question">
                    Deploying and Interacting on Testnet:
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Once the developer code the smart contract now it is
                    deployed locally on the test net to run various tests and
                    audit the smart contract to ensure that there are no bugs.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question11"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question11" className="question">
                    Testing Smart Contract:
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    This testing part is very important because a tiny mistake
                    may lead to a loss of funds on the investor’s side to
                    overcome the issues the experts test the smart contract with
                    various automated tests to bring out the product without
                    errors.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question12"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question12" className="question">
                    Deploying on Mainnet:
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    After analyzing the complete smart contract which is
                    bug-free, we deploy publically the smart contract on the
                    main net which is ready to access.
                  </p>
                </div>
              </div>
              <div className="faq-div">
                <input
                  type="checkbox"
                  id="question13"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question13" className="question">
                    Why choose NFT Constructer for NFT Smart Contract
                    Development?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    On the whole, in the event that you are anticipating
                    developing NFT Smart Contracts, then NFT Constructer will be
                    a perfect choice for you. NFT Constructer is the leading
                    <a href="#">NFT Marketplace Development Company</a>
                    superior in providing NFT smart contracts on various
                    blockchain networks with high security. With our
                    well-experienced professionals, We provide high-quality
                    solutions that add value to your business.
                  </p>
                  <p>
                    Our NFT Smart Contract Developers provide NFT Smart
                    Contracts thoroughly tested and smart contracts audited to
                    ensure that they are free of vulnerabilities and faults. We
                    have blockchain developers on board who will work with you
                    throughout the project and offer the best solutions to any
                    issues that arise and act as a flexible supporting team to
                    manage your platform.&nbsp;&nbsp;
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

SmartContract.layout = AppLayout;

export default SmartContract;
