import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <div name="contact" className="w-full bg-gradient-to-b from-black via-black to-deep-blue text-white md:h-screen">
            <div className="max-w-screen-lg w-full p-4 mx-auto flex flex-col justify-center">
                <div className="pb-8">
                    <HeaderStyle headerText="contact" />
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/8d0cd474-8d38-4f0e-a3ca-86df40050aa5" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea name="message" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-violet-400 to-purple-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact;