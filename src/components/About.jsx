import React from 'react'

const About = () => {

  return <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4">About</p>
            </div>
            <p text-xl mt-20>
                My name is Austin Ogbeide, with <b>3 years</b> experience in building web applications. 
                Clear understanding of object oriented programming and training in both Java and Javascript programming with
                BSc in Computer science.
                <br />
                <p text-xl>
                Eager to contribute to team success through hardwork,
                attention to details and excellent organisation skills. I'm motivated to learn,
                grow and excel in using technological tools to improve and solve real life
                problems.
                </p>
            </p>
        </div>
    </div>;
  
};

export default About;