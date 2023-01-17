import React, { useState } from 'react'

const Contact = () => {
    const [form_name, setName] = useState('')
    const [form_email, setEmail] = useState('')
    const [form_message, setMessage] = useState('')

    const handleClick = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

  return (
  <div name="contact" className="w-full h-screen bg-gradient-to-b
         from-black to-gray-800 p-4 text-white">
           <div className="flex flex-col p-4 justify-center max-w-screen-md mx-auto h-full w-full">
                    <div className="pb-8 pt-20">
                          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                            <p className="py-6">Submit the form below to get in touch with me</p>
                     </div>
         
         <div className="flex justify-center items-center">
             <form action="https://getform.io/f/0d6a567f-f7f0-41ab-bf64-fc7d4f8ef866" method="POST" className="flex flex-col w-full md:w-1/2">
                 <input 
                 type="text" 
                 name="name" 
                 value ={form_name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Enter your name" 
                 required
                 className="p-2 bg-transparent border-2 rounded-md text-white 
                 focus:outline-none"
                  
                 />
                  <input 
                 type="text" 
                 name="email"
                 value={form_email}
                 onChange={(e) => setEmail(e.target.value)}
                 required 
                 placeholder="Enter your email" 
                 className="my-4 p-2 bg-transparent border-2 rounded-md text-white 
                 focus:outline-none" 
                 
                 />
                 <textarea name="message" rows="10" 
                 className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                 value={form_message}
                 onChange={(e) => setMessage(e.target.value)}
                 >
                 </textarea>
                    <button onSubmit={() => handleClick()} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
                    from bg-white to to-gray-400 cursor-pointer hover:scale-105">Send
                        </button>
             </form>
         </div>
     </div>
 </div>
  );
  
};

export default Contact;