import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import java from "../assets/java.png"
import reactImage from "../assets/react.png"
import mysql from "../assets/mysql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {

    const experience = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: java,
            title: 'Java',
            style: 'shadow-red-400'
        },
        {
            id: 5,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: mysql,
            title: 'MYSQL',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
    ]

    return (
              <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
                     <div className="flex flex-col justify-center max-w-screen-md p-4 mx-auto w-full h-full text-white">
                           <div className="pt-20">
                                 <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
                                      <p className="py-8">These are the technologies I've worked with</p>
                                         </div>
       
                                     <div className="w-full grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">

                                     { experience.map(({id, src, title, style}) => (
                                 <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                              <img src={src} alt="" className="w-20 mx-auto"/>
                           <p className="mt-4">{title}</p>
                         </div>
                      ))
                  }
         
          </div>
        </div>
    </div>
    );
  
};

export default Experience;