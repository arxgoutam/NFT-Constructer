import AppLayout from "../component/Layout/Layout";
import Head from "next/head";

function Error() {
  return (
    <>
      <Head>
        <title>Page not Found </title>
        <meta property='og:site_name' content='NFT CONSTRUCTER'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:url' content='https://www.nftconstructer.com' />

        <meta
          name='google-site-verification'
          content='qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0'
        />
        <meta name='description' content='404 Page not found'></meta>
        <meta name='og:description' content='404 Page not found'></meta>
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Page not Found ' />
        <meta property='og:image' content='assets/img/meta/10.jpg' />
        <meta property='image' content='assets/img/meta/10.jpg' />
        <meta
          name='keywords'
          content='nft, full stack, web development, website, website design , website development,development, nft constructer, minting website'
        ></meta>
        <link rel='icon' type='image' href='/favicon.png'></link>
      </Head>

      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK'
          className='tag-man'
        ></iframe>
      </noscript>
      <div className='error'>
        <div className='container'>
          <section className='section-404'>
            <img src='assets/imgs/404.png' alt='404' />
            <p className='urbanist-black-56'>Page Not Found!</p>
            <p className='raleway-grey-16'>
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <button className='back-home'>Navigate Back Home</button>
          </section>
        </div>
      </div>
    </>
  );
}
Error.layout = AppLayout;

export default Error;
