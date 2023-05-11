import React from 'react'
import nabteb from '../assets/portfolio/nabteb.PNG'
import tweetclone from '../assets/portfolio/tweetclone.png'
import nabteb_javascript from '../assets/portfolio/nabteb_javascript.png'


const Porfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: nabteb,
            title: "nabteb bulk printing software",
            details: "A photoalbulm printing software of students details for NABTEB.",
            site: "https://github.com/austine5n6/nabteb-java",
            demo: "https://github.com/austine5n6/nabteb-java"
        },
        {
            id: 2,
            src: tweetclone,
            title: "Tweetclone",
            details: "A twitter lookalike website, with functionality that includes followers, retweet and posts.",
            site: "https://github.com/austine5n6/tweetclone",
            demo: "https://tweetcloneapp.netlify.app/"
        },
        {
            id: 3,
            src: nabteb_javascript,
            title: "nabteb photo-album update",
            details: "A twitter lookalike website, with functionality that includes followers, retweet and posts.",
            site: "https://github.com/austine5n6/nabteb-java",
            demo: "https://github.com/austine5n6/nabteb-java"
        },
    
          
    ]
    return <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

    <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portfolios.map(({id, src, site, demo, title, details}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src}
                alt="" 
                className="rounded-md duration-200 hover:scale-105"
                />
               
                <div className="">
                    <div className="">
                        <p className="text-sm font-semibold capitalize tracking-wider px-2 py-3">{title}</p>
                        <p className="text-xs -tracking-tighter px-2">{details}</p>
                    </div>
                    <div className="border-t-2 border-blue-200 py-3">
                <a href={demo} className="w-1/2 px-6 py-3 m-4 duration-200">Demo</a>
                <a href={site} className="w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer">Code</a>
                    </div>
                </div>
            </div>
            ))
        }

        
        </div>
    </div>
</div>;

  
};

export default Porfolio;