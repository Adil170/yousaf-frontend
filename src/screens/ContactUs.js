import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen mt-10">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-semibold text-center mb-8">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ContactUs;
