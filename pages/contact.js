import Head from "next/head";
import AppLayout from "../component/Layout/Layout";
import axios from "axios";
import Contract from "./inner/Contract";
function ContractPage() {
  return (
    <>
      <Head>
        <title>blockchain development services - Nft Constructer</title>
        <meta property='og:site_name' content='NFT CONSTRUCTER'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:url' content='https://www.nftconstructer.com' />
        <meta
          name='google-site-verification'
          content='qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0'
        />

        <meta
          name='description'
          content='Hey  Tell us everything that interests you about the Site from scratch App, NFT Web development, and UX/UI design from scratch. Let’s put it into action! We’re all prepared to assist you.
'
        ></meta>
        <meta
          name='og:description'
          content='Hey  Tell us everything that interests you about the Site from scratch App, NFT Web development, and UX/UI design from scratch. Let’s put it into action! We’re all prepared to assist you.
'
        ></meta>
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='blockchain development services - Nft Constructer'
        />
        <meta property='og:image' content='assets/img/meta/12.jpg' />
        <meta property='image' content='assets/img/meta/12.jpg' />
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
      <div className='contract-wrapper'>
        <Contract />
      </div>
    </>
  );
}

ContractPage.layout = AppLayout;

export default ContractPage;
