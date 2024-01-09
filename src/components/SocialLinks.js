import React from 'react'
import { FaHome, FaInfo, FaUpload, FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom';
// import { HiOutlineMail } from 'react-icons/hi'
// import { BsFillPersonLinesFill } from 'react-icons/bs'
// import resume from "%PUBLIC_URL%/my_CV.pdf"

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                Home <FaHome size={30}/>
                </>
            ),
            link: "/",
            style: 'rounded-tr-md'
        },
        {
          id: 2,
          child: (
              <>
              About <FaInfo size={30}/>
              </>
          ),
          link: "/about"
          
      }, 

        {
            id: 3,
            child: (
                <>
                Upload Dataset <FaUpload size={30}/>
                </>
            ),
            link: "/dataset"
          
           
        },
        {
            id: 4,
            child: (
                <>
                Url check <FaSearch size={30}/>
                </>
            ),
            link: "/urlcheck",
        },
      //   {
      //       id: 5,
      //       child: (
      //           <>
      //           Resume <BsFillPersonLinesFill size={30}/>
      //           </>
      //       ),
      //       href: "/resume.pdf",
      //       style: 'rounded-br-md',
      //       download: true,
      //   },
      
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {links.map(({ id, child, link, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                  " " +
                  style
                }
              >
                <Link
                  to={link}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  rel="noreferrer"
                >
                  {child}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );

}

export default SocialLinks