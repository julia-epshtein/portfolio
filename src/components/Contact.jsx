import React from 'react';
import HeaderStyle from '../utilities/HeaderStyle';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-br from-violet-400 to-sky-300 text-black pt-20">
            <div className="max-w-screen-lg w-full mx-auto flex flex-col justify-center">
                <div className="pb-8">
                    <div className = "pl-8"><HeaderStyle headerText="Contact" /></div>
                    <p className="pt-8 pl-8 font-source font-bold text-black text-2xl">Submit the form below to get in touch with me!</p>
                </div>
                <div className="flex justify-start items-center p-8">
                    <div className="bg-neutral-800 rounded-3xl p-8 w-full md:w-3/4">
                        <div className="mb-6">
                            <label className="block text-white mb-2 font-paragraph" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="p-4 bg-neutral-900 rounded-md text-white w-full focus:outline-none text-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white mb-2 font-paragraph" htmlFor="email">Your Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="p-4 bg-neutral-900 rounded-md text-white w-full focus:outline-none text-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white mb-2 font-paragraph" htmlFor="message">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                className="p-4 bg-neutral-900 rounded-md text-white w-full focus:outline-none text-lg"
                            ></textarea>
                        </div>
                        <button className="text-white bg-black font-source text-2xl px-8 py-4 mx-auto rounded-xl hover:scale-110 duration-300">
                            <span>
                                Send {" "}
                                <HiOutlineMail size={30} className="inline-block ml-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
