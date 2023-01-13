import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import React, { Component } from "react";
import axios from "axios";
function Career() {
  return (
    <div>
      <Head>
        <title>NFT Website Development Services - Nft Constructer</title>
        <meta property='og:site_name' content='NFT CONSTRUCTER'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:url' content='https://www.nftconstructer.com' />
        <meta
          name='google-site-verification'
          content='qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0'
        />

        <meta
          name='description'
          content='We provide NFT website development services for digital content such as art, music, and videos, domain names, gaming items, investments, and other physical items that are unique Contact us!'
        ></meta>
        <meta
          name='og:description'
          content='We provide NFT website development services for digital content such as art, music, and videos, domain names, gaming items, investments, and other physical items that are unique Contact us!'
        ></meta>
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='NFT Website Development Services |nft constructer'
        />
        <meta property='og:image' content='assets/img/meta/1.jpg' />
        <meta property='image' content='assets/img/meta/1.jpg' />
        <meta
          name='keywords'
          content='Nft minting website development NFT Website Design NFT marketplace development'
        ></meta>
        <link rel='icon' type='image' href='/favicon.png'></link>
      </Head>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK'
          className='tag-man'
        ></iframe>
      </noscript>
      <div className='career-area'>
        <div className='container'>
          <div className='career-form'>
            <div className='row cpt-7'>
              <div
                className='request-form'
                data-aos='fade-up'
                data-aos-duration='1500'
              >
                <form>
                  <div className='form-group-3'>
                    <div className='input-group'>
                      <label htmlFor='name'>Your Name</label>
                      <div className='input-box'>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          placeholder='Enter Your Name'
                        />
                      </div>
                    </div>
                    <div className='input-group'>
                      <label htmlFor='email'>Email</label>
                      <div className='input-box'>
                        <input
                          type='text'
                          name='email'
                          placeholder='Enter Your Email'
                          className='form-control with-select'
                        />
                      </div>
                    </div>
                    <div className='input-group'>
                      <label htmlFor='phone'>Phone Number:</label>
                      <div className='input-box'>
                        <input
                          type='text'
                          name='phone'
                          placeholder='Enter Your Phone'
                          className='form-control with-select'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group-3'>
                    <div className='input-group'>
                      <label htmlFor='name'>Current Annual CTC</label>
                      <div className='input-box'>
                        <input
                          type='text'
                          name='ctc'
                          className='form-control'
                          placeholder='CTC'
                        />
                      </div>
                    </div>
                    <div className='input-group'>
                      <label htmlFor='name'>Expected Annual CTC</label>
                      <div className='input-box'>
                        <input
                          type='text'
                          name='annual-ctc'
                          className='form-control'
                          placeholder='Expected Annual CTC'
                        />
                      </div>
                    </div>

                    <div className='input-group'>
                      <label htmlFor='notice'>Notice Peri</label>
                      <div className='input-box'>
                        <input
                          type='text'
                          name='notice'
                          placeholder='Notice Peri'
                          className='form-control with-select'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='form-group'>
                    <div className='input-group'>
                      <label htmlFor='message'>Cover letter</label>
                      <div className='input-box'>
                        <textarea
                          name='message'
                          className='form-control'
                          cols='30'
                          rows='10'
                          placeholder='Enter Cover Letter'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group'>
                      <div className='file-input'>
                        <input
                          type='file'
                          className='form-control'
                          placeholder='Select Your File'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group mt-3'>
                    <button className='btn-hero-1' type='submit'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Career.layout = AppLayout;

export default Career;
