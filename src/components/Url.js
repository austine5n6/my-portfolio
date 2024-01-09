import React from 'react';

const Url = () => {

    return(
    //     <div className="h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center">
    //     <h4 className="text-5xl sm:text-7xl font-bold text-white">Url check</h4>
    //this is a a comment

    
    // </div>
    <div class="h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center">
        <h4 className="text-white p-12 text-4xl">Url Scan</h4>
            <div class="relative">
    <form action="#" method="GET">
        <div class="flex">
            <input type="text" class="w-40 md:w-48 lg:w-64 px-10 py-2 rounded-l-full transition-all duration-300 focus:outline-none focus:w-64" placeholder="Search Url..." name="search" />
            <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600">Search</button>
        </div>
    </form>
</div>
  
    </div>
    );
}

export default Url;