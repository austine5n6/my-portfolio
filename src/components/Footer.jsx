import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MyDate from "../scripts/MyDate"

const Footer = () => {
  return (
    <div className="text-center lg:text-left bg-gradient-to-b from-gray-800 to-black text-gray-500">
        <div className="flex justify-center items-center lg:justify-center p-6 border-gray-300">
            <div className="mr-12 hidden lg:block">
                <span>Reach out to my social network</span>
            </div>
             <div className="flex justify-center">
            <FaTwitter className="mr-6 text-gray-600"/>
            <FaLinkedin className="mr-6 text-gray-600"/>
            <FaGithub className="mr-6 text-gray-600"/>
            </div>
        </div>

          <div className="flex justify-center">
        <div className="mx-6 py-10 text-center md:text-left grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <span>Blog</span>
            <div className='flex flex-col'>
                {/* <h6 className="font-semibold mb-4 flex flex-col justify-center md:justify-start">Useful links</h6> */}
            <Link to="about" smooth duration={500} className="cursor-pointer">About</Link>
            <Link to="portfolio" smooth duration={500} className="cursor-pointer">Portfolio</Link>
            <Link to="experience" smooth duration={500} className="cursor-pointer">Experience</Link>
         
            </div>
            <Link to="contact" smooth duration={500} className="cursor-pointer">Contact ME</Link>
        </div>
          </div>
            <p className="text-center"> © Copyright <MyDate /> : Designed by Austin Ogbeide </p>
    </div>

  )
};

export default Footer;