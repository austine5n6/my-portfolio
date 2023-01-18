import React, { useEffect, useState, } from 'react'

const Contact = () => {
 
    const [form_name, setName] = useState("")
    const [form_email, setEmail] = useState("")
    const [form_message, setformMessage] = useState("")
  
    const refreshPage = () => {
        window.location.reload();
   }

   const handleClick = () => {
        setName("")
        setEmail("")
        setformMessage("")
    }
    useEffect(() => {
        let interval = setInterval(() => refreshPage(), 2000)
        clearInterval(interval)
    },[form_name, form_email, form_message])

  return (
  <div name="contact" className="w-full h-screen bg-gradient-to-b
         from-black to-gray-800 p-4 text-white">
           <div className="flex flex-col p-4 justify-center max-w-screen-md mx-auto h-full w-full">
                    <div className="pb-8 pt-20">
                          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                            <p className="py-6">Submit the form below to get in touch with me</p>
                     </div>
         
         <div className="flex justify-center items-center">
             <form action="https://getform.io/f/cc5c7f63-9425-4b8e-8f21-bd82dc32d641" method="POST" className="flex flex-col w-full md:w-1/2">
                 <input 
                 type="text" 
                 name="name" 
                 value={form_name}
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
                 <textarea 
                 name="message"
                 type="text" 
                 value={form_message}
                 onChange={(e) => setformMessage(e.target.value)}
                 required
                 rows="10" 
                 className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                 >
                 </textarea>
                    <button onSubmit={handleClick} type="submit" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
                    from bg-white to to-gray-400 cursor-pointer hover:scale-105">Send
                        </button>
             </form>
         </div>
     </div>
 </div>
  );
  
};

export default Contact;