import MyDate from "../scripts/MyDate"
import React from 'react'
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="text-center lg:text-left bg-gradient-to-b from-gray-800 to-black text-gray-500">
            <p className="text-center"> © Copyright <MyDate /> : Designed by Austin Ogbeide </p>
    </div>

  )
};
export default Footer;