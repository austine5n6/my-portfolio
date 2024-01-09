import React from 'react';

const About = () => {
    return (
        <div className="h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center">
            <h4 className="text-5xl sm:text-7xl font-bold text-white">About</h4>
            <div className="container mx-auto mt-8 p-4 text-white">
              <center>
              <p className="text-lg mb-4">
        Welcome to Secure URL Shield, your go-to solution for managing and checking of suspicious web links.
      </p>
      <p className="text-lg mb-4">
        In an age where cyber threats are prevalent, Secure URL Shield empowers you to confidently check and verify URLs while minimizing risks.
      </p>
      <p className="text-lg mb-4">
        Thank you for choosing Secure URL Shield. If you have any questions or feedback, don't hesitate to reach out. Your security is our priority.
      </p>
              </center>

    </div>
    
        </div>
    );
}

export default About;