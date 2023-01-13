import React, { useEffect, useState } from "react";
import Link from "next/link";

function Footer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/latest/there")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <>
      <div className='footer-area'>
        <div className='container'>
          <footer>
            <div className='social-area'>
              <div className='footer-first'>
                <div className='footer-logo'>
                  <img src='assets/img/footer-logo.png' alt='nft constructer' />
                </div>
                <p className='urbanist-white-14'>
                  When it comes to the digital assets or blockchain industry,
                  Nftconstructer always stands out from the crowd.
                </p>
                <div className='footer-links'>
                  <a href='https://facebook.com/nftconstructer?_rdc=1&_rdr'>
                    <div>
                      <svg
                        width='8'
                        height='14'
                        viewBox='0 0 8 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.08398 7.9375L7.43945 5.60156H5.17969V4.07812C5.17969 3.41797 5.48438 2.80859 6.5 2.80859H7.54102V0.802734C7.54102 0.802734 6.60156 0.625 5.71289 0.625C3.85938 0.625 2.64062 1.76758 2.64062 3.79883V5.60156H0.558594V7.9375H2.64062V13.625H5.17969V7.9375H7.08398Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </a>
                  <a href='https://twitter.com/NftConstructer'>
                    <div>
                      <svg
                        width='13'
                        height='12'
                        viewBox='0 0 13 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.6543 3.48438C12.1621 3.10352 12.6191 2.64648 12.9746 2.11328C12.5176 2.31641 11.9844 2.46875 11.4512 2.51953C12.0098 2.18945 12.416 1.68164 12.6191 1.04688C12.1113 1.35156 11.5273 1.58008 10.9434 1.70703C10.4355 1.17383 9.75 0.869141 8.98828 0.869141C7.51562 0.869141 6.32227 2.0625 6.32227 3.53516C6.32227 3.73828 6.34766 3.94141 6.39844 4.14453C4.18945 4.01758 2.20898 2.95117 0.888672 1.35156C0.660156 1.73242 0.533203 2.18945 0.533203 2.69727C0.533203 3.61133 0.990234 4.42383 1.72656 4.90625C1.29492 4.88086 0.863281 4.7793 0.507812 4.57617V4.60156C0.507812 5.89648 1.42188 6.96289 2.64062 7.2168C2.4375 7.26758 2.18359 7.31836 1.95508 7.31836C1.77734 7.31836 1.625 7.29297 1.44727 7.26758C1.77734 8.33398 2.76758 9.0957 3.93555 9.12109C3.02148 9.83203 1.87891 10.2637 0.634766 10.2637C0.40625 10.2637 0.203125 10.2383 0 10.2129C1.16797 10.9746 2.56445 11.4062 4.08789 11.4062C8.98828 11.4062 11.6543 7.36914 11.6543 3.83984C11.6543 3.71289 11.6543 3.61133 11.6543 3.48438Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </a>
                  <a href='https://www.linkedin.com/company/nftconstructer'>
                    <div>
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2.53906 12V4.4082H0.177734V12H2.53906ZM1.3457 3.39258C2.10742 3.39258 2.7168 2.75781 2.7168 1.99609C2.7168 1.25977 2.10742 0.650391 1.3457 0.650391C0.609375 0.650391 0 1.25977 0 1.99609C0 2.75781 0.609375 3.39258 1.3457 3.39258ZM11.3496 12H11.375V7.83594C11.375 5.80469 10.918 4.23047 8.53125 4.23047C7.38867 4.23047 6.62695 4.86523 6.29688 5.44922H6.27148V4.4082H4.01172V12H6.37305V8.24219C6.37305 7.25195 6.55078 6.3125 7.76953 6.3125C8.98828 6.3125 9.01367 7.42969 9.01367 8.31836V12H11.3496Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </a>
                  <a href='https://www.youtube.com/channel/UCmEUtBaPpcKJwucGTECCb_w'>
                    <div>
                      <svg
                        width='15'
                        height='10'
                        viewBox='0 0 15 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.9395 1.79883C13.7871 1.18945 13.3047 0.707031 12.7207 0.554688C11.6289 0.25 7.3125 0.25 7.3125 0.25C7.3125 0.25 2.9707 0.25 1.87891 0.554688C1.29492 0.707031 0.8125 1.18945 0.660156 1.79883C0.355469 2.86523 0.355469 5.15039 0.355469 5.15039C0.355469 5.15039 0.355469 7.41016 0.660156 8.50195C0.8125 9.11133 1.29492 9.56836 1.87891 9.7207C2.9707 10 7.3125 10 7.3125 10C7.3125 10 11.6289 10 12.7207 9.7207C13.3047 9.56836 13.7871 9.11133 13.9395 8.50195C14.2441 7.41016 14.2441 5.15039 14.2441 5.15039C14.2441 5.15039 14.2441 2.86523 13.9395 1.79883ZM5.89062 7.20703V3.09375L9.49609 5.15039L5.89062 7.20703Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className='footer-list'>
              <p className='urbanist-white-18'>Our Services</p>
              <div>
                <Link href={"/nft-website-development"}>
                  <p className='urbanist-white-14'>Website Development</p>
                </Link>
                <Link href={"/website-design"}>
                  <p className='urbanist-white-14'>Website Design</p>
                </Link>
                <Link href={"/smart-contract"}>
                  <p className='urbanist-white-14'>Smart Contract</p>
                </Link>
                <Link href={"/smart-contract-analysis"}>
                  <p className='urbanist-white-14'>Smart Contract Analysis</p>
                </Link>
                <Link href={"/website-analysis"}>
                  <p className='urbanist-white-14'>Website Analysis</p>
                </Link>
              </div>
            </div>

            <div className='footer-list'>
              <p className='urbanist-white-18'>Pages</p>
              <div>
                <Link href={"/about"}>
                  <p className='urbanist-white-14'>About Us</p>
                </Link>
                <Link href={"/contact"}>
                  <p className='urbanist-white-14'>Contact Us</p>
                </Link>
                <Link href={"/terms"}>
                  <p className='urbanist-white-14'>Terms & Conditions</p>
                </Link>
                <Link href={"/portfolio"}>
                  <p className='urbanist-white-14'>Portfolio </p>
                </Link>
                <Link href={"/blog"}>
                  <p className='urbanist-white-14'>Latest News</p>
                </Link>
              </div>
            </div>

            <div className='footer-news'>
              <p className='urbanist-white-18'>News & Post</p>

              <div className='footer-posts'>
                {posts.map((post, index) => (
                  <div className='footer-post' key={index}>
                    <img src={post.main_image} alt={post.title} />
                    <div>
                      <Link href={"/" + post.slug}>
                        <a className='urbanist-white-16'>
                          {post.title.substring(0, 20)}
                        </a>
                      </Link>
                      <span>
                        <svg
                          width='14'
                          height='16'
                          viewBox='0 0 14 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z'
                            fill='#B6AAF5'
                          />
                        </svg>
                        <p className='urbanist-white-13'>{post.created_date}</p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Footer;
