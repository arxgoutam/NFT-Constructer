import { useState, useEffect } from "react";

function Social() {
  const [socialActive, setSocialActive] = useState(false);

  const _toggleSidebar = () => {
    setSocialActive(!socialActive);
  };

  return (
    <div>
      <div className={`${socialActive ? "pulse-disable" : ""} right-social`}>
        <ul className={`${socialActive ? "active" : ""} social-ul-fixed`}>
          <li>
            <a href='#' className='social-link' onClick={_toggleSidebar}>
              <i
                className={`${
                  socialActive ? "icofont-close" : "icofont-live-support"
                }`}
              ></i>
            </a>
          </li>
          <li>
            <a href='https://wa.me/13025977087' className='social-link'>
              <i className='icofont-brand-whatsapp'></i>
            </a>
          </li>
          <li>
            <a
              href='https://web.facebook.com/nftconstructer?_rdc=1&_rdr'
              className='social-link'
            >
              <i className='icofont-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://t.me/nft_constructer' className='social-link'>
              <i className='icofont-telegram'></i>
            </a>
          </li>
          <li>
            <a href='mailto:support@nftconstructer.com' className='social-link'>
              <i className='icofont-email'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Social;
