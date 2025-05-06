import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo_footer} alt="Footer logo" />
          <p className="footer-slogan">Just a Bite Away</p>
          
        </div>
        <div className="footer-content-right">
          <h2>Company</h2>
          <ul className='footer-links'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Get in Touch</h2>
          <ul className='footer-links'>
            <li>+1-135-256-9874</li>
            <li>contact@biteezy.com</li>
          </ul>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2025 © biteezy.com - All Right Reserved.</p>
    </div>
  )
}
