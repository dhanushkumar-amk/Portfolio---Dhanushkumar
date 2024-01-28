import React from 'react';import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Dhanush</h1>

        <ul className='footer__list'>
          <li>
            <a
              href='#about'
              className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a
              href='#portfolio'
              className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a
              href='#Skills'
              className='footer__link'>
              Skills
            </a>
          </li>
        </ul>
        <div className='footer__socials'>
          <a
            href='https://www.instagram.com/dhanuxxsh._.07/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'>
            <i class='bx bxl-instagram'></i>
          </a>

          <a
            href='https://www.facebook.com/Dhanushkumaramk'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'>
            <i class='bx bxl-facebook'></i>
          </a>

          <a
            href='https://twitter.com/dhanushkumaramk'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'>
            <i class='bx bxl-twitter'></i>
          </a>
        </div>

        <span className='footer__copy'>
          &#169; dhanushkumar. All rights reserved -2024
        </span>
        <span className='footer__brand'>
          <div className='brand__name'>
            <i class='bx bx-buildings brand__icon'></i>Brand Name - {''}
            <a href='#'>
              VisioVibe <i class='bx bxs-right-arrow-alt arrow'></i>
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
