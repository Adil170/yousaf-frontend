import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <p>
            Address: 123 Main Street<br />
            City, State 12345<br />
            Email: info@example.com<br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl mb-4">Quick Links</h2>
          <ul>
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl mb-4">Follow Us</h2>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Your Glasses Website</p>
      </div>
    </footer>
  );
}

export default Footer;
