import React from 'react'
import { BiUpArrowCircle } from 'react-icons/bi';
import { FaFacebookF } from "react-icons/fa6";
import {FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokFill } from 'react-icons/ri';
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from 'react-icons/fa';




function Footer() {

    const thisYear = new Date().getFullYear()

  return (
    <footer>
        <a className='footer-arrow' href='#'><BiUpArrowCircle/></a>
        <aside className='footer-2'>
            <h2 className='footer-title'>Fatuma</h2>
            <nav className='footer-anchor-tag-container'>
                <a className='footer-anchor-tag' href='#'>Support</a>
                <a className='footer-anchor-tag' href='#'>About</a>
                <a className='footer-anchor-tag' href='#'>Jobs</a>
            </nav>
            <div className='social-media'>
                <a href='#' className='social-medias'>
                    <FaFacebookF/>
                </a>
                <a href='#' className='social-medias'>
                    <FaTwitter/>
                </a>
                <a href='#' className='social-medias'>
                    <IoLogoYoutube/>
                </a>
                <a href='#' className='social-medias'>
                    <FaInstagram/>
                </a>
                <a href='#' className='social-medias'>
                    <RiTiktokFill/>
                </a>
                <a href='#' className='social-medias'>
                    <FaLinkedin/>
                </a>
                <a href='#' className='social-medias'>
                    <FaPinterestP/>
                </a>
                
            </div>
            <div className='footer-last-elemets'>
                <small className='footer-copyright'>&#169; {thisYear}</small>
                <a className='footer-last-elements-links' href='#'>Term</a>
                <a className='footer-last-elements-links' href='#'>Privacy</a>
                <a className='footer-last-elements-links' href='#'>Cookies</a>
            </div>
        </aside>
    </footer>
  )
}

export default Footer