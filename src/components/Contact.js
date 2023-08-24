import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div name="contact" className="w-full bg-gradient-to-b from-black via-black to-deep-blue text-white md:h-screen pt-20">
            <div className="max-w-screen-lg w-full p-8 mx-auto flex flex-col justify-center">
                <div className="pb-8">
                    <HeaderStyle headerText="contact" />
                    <p className="pt-8 text-lg">Submit the form below to get in touch with me!</p>
                </div>
                <div className="flex justify-start items-center">
                    <div className="bg-deep-blue rounded-3xl p-8 w-full md:w-3/4">
                        <div className="mb-6">
                            <label className="block text-white mb-2 text-lg" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="p-4 bg-transparent border-2 rounded-md text-white w-full focus:outline-none text-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white mb-2 text-lg" htmlFor="email">Your Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="p-4 bg-transparent border-2 rounded-md text-white w-full focus:outline-none text-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white mb-2 text-lg" htmlFor="message">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Enter your message"
                                className="p-4 bg-transparent border-2 rounded-md text-white w-full focus:outline-none text-lg"
                            ></textarea>
                        </div>
                        <button className="text-white bg-purple-700 px-8 py-4 mx-auto rounded-md hover:scale-110 duration-300">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
