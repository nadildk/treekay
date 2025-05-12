"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID!
      );
      console.log(result.text);
      setIsSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-48 pt-20 pb-32 bg-black text-white"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
    >
      <h2 className="text-4xl font-bold text-center mb-10">contact</h2>
      <p className="text-center text-lg text-gray-400 mb-6">reach out below!</p>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {isSent ? (
          <div className="text-center text-green-500">
            <p>Your message has been sent successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded-md"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded-md"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Your Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded-md"
                placeholder="Write your message"
                rows={4}
              />
            </div>

            <motion.button
              type="submit"
              className={`w-full py-3 bg-green-500 text-white font-medium rounded-full ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
