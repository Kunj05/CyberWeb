"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations

export default function ContactUs() {
  const contacts = [
    {
      platform: "WhatsApp",
      username: "Cybercell Group",
      qrCodeUrl: "/Whatsapp.png", // Replace with actual QR code URL
      profileUrl: "https://wa.me/1234567890", // Replace with actual WhatsApp URL
    },
    {
      platform: "Instagram",
      username: "@cybercellgroup",
      qrCodeUrl: "/insta.png", // Replace with actual QR code URL
      profileUrl: "https://instagram.com/cybercellgroup", // Replace with actual Instagram URL
    },
    {
      platform: "LinkedIn",
      username: "Cybercell Group",
      qrCodeUrl: "/linkedin.png", // Replace with actual QR code URL
      profileUrl: "https://linkedin.com/company/cybercellgroup", // Replace with actual LinkedIn URL
    },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Message sent successfully!');
        event.currentTarget.reset(); // Reset the form
    } else {
        alert('Failed to send message. Please try again.');
    }
};
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
  
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

                    <div className="text-center pb-6">
                        <h1 className="text-3xl">Contact Us!</h1>
                        <p className="text-gray-300">
                            Fill up the form below to send us a message.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Name"
                            name="name"
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Subject"
                            name="_subject"
                        />

                        <textarea
                            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Type your message here..."
                            name="message"
                            style={{ height: '121px' }}
                        ></textarea>

                        <div className="flex justify-between">
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="Send ➤"
                            />
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>

      <div className="container mx-auto px-4 md:px-2 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{contact.platform}</h2>
              <p className="text-lg font-semibold text-gray-400 mb-6">{contact.username}</p>
              <a
                href={contact.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={contact.qrCodeUrl}
                  alt={`${contact.platform} QR Code`}
                  width={220}
                  height={220}
                  className="mx-auto mb-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                />
              </a>
              <a
                href={contact.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg text-blue-500 hover:text-blue-300 transition-colors"
              >
                Visit {contact.platform} Profile
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
