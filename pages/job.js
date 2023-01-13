import React, { useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import axios from "axios";
function Job() {
  const [JobPopup, setJobPopup] = useState(false);
  const _toggleSidebar = () => {
    setJobPopup(!JobPopup);
  };

  const [inputField, setInputField] = useState({
    email: "",
    name: "",
  });
  const [documents, setDocuments] = useState([]);

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };
  const handelFile = (e) => {
    setDocuments({
      document: e.target.files[0],
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputField.name);
    formData.append("email", inputField.email);
    formData.append("cv", documents.document);

    axios.post("http://localhost:8000/api/store-job", formData).then((res) => {
      if (res.data.status === 200) {
        _toggleSidebar("");
        alert("Your Form submit successfully complected");
      } else {
        alert(
          "Maybe You not fill all the required fields. Please check again and fill all the required fields (*)."
        );
      }
    });
  };
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
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

      <div className={`${JobPopup ? "active" : ""} job-form`}>
        <div className='model-width'>
          <button className='close-btn' onClick={_toggleSidebar}>
            <img src='assets/img/close.svg' alt='Image Not Found' />
          </button>
          <div className='form-inner'>
            <div className='form-head'>
              <h2 className='branding'>Apply To NFT Constructer</h2>
              <p>
                We&lsquo;re a pretty big team, comprised of pretty small teams,
                powered by unique minds
              </p>
            </div>
            <div className='model-area'>
              <form onSubmit={allInfoSubmit} encType='multipart/form-data'>
                <div className='input-group'>
                  <label>Enter Your Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control job-input'
                    onChange={inputsHandler}
                    value={inputField.name}
                    placeholder={"Enter Your Name"}
                    required
                  />
                </div>
                <div className='input-group'>
                  <label>Enter Your Email</label>
                  <input
                    type='email'
                    name='email'
                    className='form-control job-input'
                    onChange={inputsHandler}
                    value={inputField.email}
                    placeholder={"Enter Your Email"}
                    required
                  />
                </div>

                <div className='input-group'>
                  <label>Choose Your CV</label>
                  <input
                    type='file'
                    name='cv'
                    className='form-control job-input'
                    onChange={handelFile}
                    required
                  />
                </div>
                <div className='input-group mt-3'>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='job-hero'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='job-hero-text text-align-center'>
                <h1>Job Opportunities career with prismetric</h1>
                <p>
                  Ability is what you`&apos;`re capable of doing. Motivation
                  determines what you do. Attitude determines how well you do
                  it.
                </p>

                <div className='hero-btn'>
                  <a href='#' className='btn-hero-1' onClick={_toggleSidebar}>
                    Submit Your CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src='assets/img/job/3.png'
          alt='Image Not Found'
          className='shap-3'
        />
        <img
          src='assets/img/job/2.png'
          alt='Image Not Found'
          className='shap-2'
        />
        <img
          src='assets/img/job/1.png'
          alt='Image Not Found'
          className='shap-1'
        />
      </div>

      {/* ===================employees valued ===================== */}

      <div className='employees'>
        <div className='container'>
          <div className='row-col-4'>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/4.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Employees are valued</h4>
                  <p>
                    The competency of the employees is highly valued and
                    treasured
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/5.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Resourceful atmosphere</h4>
                  <p>
                    Highly equipped and resourceful environment to explore
                    latest technology
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/6.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Encouraging community</h4>
                  <p>
                    Surrounded by experts who unconditionally encourage and
                    positively supportive
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/7.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Exceptional projects</h4>
                  <p>
                    Build your career working for some exceptionally great
                    projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== hiring procedure =============== */}
      <div className='hiring-procedure'>
        <div className='container'>
          <div className='sec-title'>
            <h2>Our Hiring Procedure</h2>
          </div>
          <div className='row-col-4'>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/8.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>First Interaction</h4>
                  <p>
                    The initial conversation with the HR where the basic
                    qualification and level of communication will be assessed.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/9.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Technical round</h4>
                  <p>
                    The core knowledge and technical skill of the interviewee
                    will be assessed in the second round of interview.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/10.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Practical assessment round</h4>
                  <p>
                    The third round where the candidate will exposed to a
                    real-time assessment where his/her practical knowledge will
                    be analyzed.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='value-card'>
                <img
                  src='assets/img/job/10.png'
                  alt='Image Not Found'
                  className='emp-icon'
                />
                <div className='card-title'>
                  <h4>Final discussion with HR</h4>
                  <p>
                    This is the final round where the HR will brief the
                    candidate about the job description and office ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===============================perimetric =================== */}
      <div className='perimetric'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='sec-title'>Career at Prismetric</h2>
            <p className='sec-des'>
              Plant your skills at the right place to grow.
            </p>
          </div>

          <div className='col-md-10'>
            <div className='perimetric-content'>
              <ul className='perimetric-ul'>
                <li className='perimetric-li'>
                  <p>
                    Our friendly movement with the employees has always been
                    appreciated and offers our teams a comfortable work place
                    where they act freely and accomplish their tasks on time
                    with dedication.
                  </p>
                </li>
                <li className='perimetric-li'>
                  <p>
                    We always respect our employees’ commitment more than
                    anything that we never fail to reward their outstanding
                    performences every month
                  </p>
                </li>
                <li className='perimetric-li'>
                  <p>
                    Here are the positions vacant for the talented professionals
                    and engineers to explore your skills in one of the
                    comfortable and friendly work places in India.
                  </p>
                </li>
                <li className='perimetric-li'>
                  <p>
                    Even if you are a fresher or an experienced professional
                    mail us your CV with the job title that you would like to
                    apply for as the ‘subject line’ of the email, and we will
                    get in touch with you.
                  </p>
                </li>
                <li className='perimetric-li'>
                  <p className='bold-text'>E-mail : career@prismetric.com</p>
                </li>
                <li className='perimetric-li'>
                  <p className='bold-text'>HR & Recruitment : +91-7043308535</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* =================================current openings ====================== */}

      <div className='current-openings'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='sec-title'>Current Openings</h2>
            <p className='sec-des'>
              Here are the positions vacant for the talented professionals and
              engineers to explore your skills in one of the comfortable and
              friendly work places.
            </p>
          </div>
          <div className='content'>
            <div
              className='faq-div'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <input
                type='checkbox'
                id='question1'
                name='q'
                className='questions '
              />

              <div className='qustion question-bg'>
                <label htmlFor='question1' className='question'>
                  FRONTEND DEVELOPER
                </label>
                <div className='plus'>+</div>
              </div>
              <div className='answers'>
                <div className='answer-content'>
                  <h2>Experience</h2>
                  <p className='skill-point'>
                    1 – 3 years of experience required
                  </p>
                </div>
                <div className='answer-content'>
                  <h2>Job Description</h2>
                  <p className='skill-point'>
                    Participate in the entire application life cycle; focusing
                    on coding and debugging
                  </p>
                  <p className='skill-point'>
                    Optimize code to develop functional web applications
                  </p>
                  <p className='skill-point'>
                    Troubleshoot and debug applications
                  </p>
                  <p className='skill-point'>
                    Manage cutting-edge technologies to improve legacy
                    applications
                  </p>
                  <p className='skill-point'>
                    Collaborate with front-end developers to integrate
                    user-facing elements with server-side logic
                  </p>
                  <p className='skill-point'>
                    Build reusable code and libraries for future use
                  </p>
                </div>
                <div className='answer-content'>
                  <h2>Skills Required :</h2>
                  <p className='skill-point'>
                    Knowledge of HTML5, CSS3, JavaScript, Jquery, Bootstrap 5,
                    React JS, Next JS Web Programming Skills
                  </p>
                  <p className='skill-point'>
                    Strong Object Oriented Programming concept
                  </p>
                  <p className='skill-point'>
                    Good exposure in Server (Linux, Apache, Mysql)
                  </p>
                  <p className='skill-point'>
                    Candidate must be self-motivated and detail-oriented with
                    good organizational skills, ability to prioritize multi-task
                    and meet deadlines
                  </p>
                </div>
              </div>
            </div>

            <div
              className='faq-div'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <input
                type='checkbox'
                id='question2'
                name='q'
                className='questions'
              />

              <div className='qustion question-bg'>
                <label htmlFor='question2' className='question'>
                  BACKEND DEVELOPER
                </label>
                <div className='plus'>+</div>
              </div>
              <div className='answers'>
                <div className='answer-content'>
                  <h2>Experience</h2>
                  <p className='skill-point'>
                    1 – 3 years of experience required
                  </p>
                </div>
                <div className='answer-content'>
                  <h2>Job Description</h2>
                  <p className='skill-point'>
                    Participate in the entire application life cycle; focusing
                    on coding and debugging
                  </p>
                  <p className='skill-point'>
                    Optimize code to develop functional web applications
                  </p>
                  <p className='skill-point'>
                    Troubleshoot and debug applications
                  </p>
                  <p className='skill-point'>
                    Manage cutting-edge technologies to improve legacy
                    applications
                  </p>
                  <p className='skill-point'>
                    Collaborate with front-end developers to integrate
                    user-facing elements with server-side logic
                  </p>
                  <p className='skill-point'>
                    Build reusable code and libraries for future use
                  </p>
                </div>
                <div className='answer-content'>
                  <h2>Skills Required :</h2>
                  <p className='skill-point'>
                    Sound knowledge of PHP; CodeIgniter / Laravel / nodejs.
                    Knowledge of all will be a great plus
                  </p>
                  <p className='skill-point'>
                    Knowledge of Mongo DB, Jquery / AJAX, JavaScript, HTML,
                    HTML5, CSS, CSS3, Web Programming Skills
                  </p>
                  <p className='skill-point'>
                    Strong Object Oriented Programming concept
                  </p>
                  <p className='skill-point'>
                    Good exposure in LAMP (Linux, Apache, Mysql, PHP)
                  </p>
                  <p className='skill-point'>
                    Candidate must be self-motivated and detail-oriented with
                    good organizational skills, ability to prioritize multi-task
                    and meet deadlines
                  </p>
                </div>
              </div>
            </div>

            <div
              className='faq-div'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <input
                type='checkbox'
                id='question3'
                name='q'
                className='questions '
              />

              <div className='qustion question-bg'>
                <label htmlFor='question3' className='question'>
                  BLOCKCHAIN DEVELOPER
                </label>
                <div className='plus'>+</div>
              </div>
              <div className='answers'>
                <div className='answer-content'>
                  <h2>Experience</h2>
                  <p className='skill-point'>
                    1 – 3 years of experience required
                  </p>
                </div>
                <div className='answer-content'>
                  <h2>Job Description</h2>
                  <p className='skill-point'>
                    Participate in the entire application life cycle; focusing
                    on coding and debugging
                  </p>
                  <p className='skill-point'>
                    Optimize code to develop functional web applications
                  </p>
                  <p className='skill-point'>
                    Troubleshoot and debug applications
                  </p>
                  <p className='skill-point'>
                    Manage cutting-edge technologies to improve legacy
                    applications
                  </p>
                  <p className='skill-point'>
                    Collaborate with front-end developers to integrate
                    user-facing elements with server-side logic
                  </p>
                  <p className='skill-point'>
                    Build reusable code and libraries for future use
                  </p>
                </div>
                <div className='answer-content'>
                  <h2>Skills Required :</h2>
                  <p className='skill-point'>
                    Knowledge of WEB 3.0, Solidity, Rust, Solana, C++ and Java
                    Web Programming Skills
                  </p>
                  <p className='skill-point'>
                    Strong Object Oriented Programming concept
                  </p>
                  <p className='skill-point'>
                    Candidate must be self-motivated and detail-oriented with
                    good organizational skills, ability to prioritize multi-task
                    and meet deadlines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Job.layout = AppLayout;

export default Job;
