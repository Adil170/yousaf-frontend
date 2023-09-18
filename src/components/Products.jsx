// Products.js
import React ,{useState}from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { productsData } from '../components/constents';
import Navbar from './Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Products() {
  const [category , setCategory] =useState(productsData)  
  const filterResult =(curItem)=> { 
  const result = productsData.filter((curData) => {
   return curData.category === curItem
  })
   setCategory(result)
  }




  const settings = {
    infinite: true,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    arrows: true, // Show navigation arrows
  };


  return (
    <>
      <Navbar />
      <div className="category-slider ">
        <Slider {...settings}>

          <button className='bg-gray-800 p-3 hover:bg-gray-700 text-white lg:rounded px-2 mx-3 border border-white font-semibold' onClick={() =>{filterResult('Sunglasses')}}>Sunglasses</button>
          <button className='bg-gray-800 p-3 hover:bg-gray-700 text-white lg:rounded px-2 mx-3 border border-white font-semibold' onClick={() =>{filterResult('Goggles')}}>Goggles</button>
          <button className='bg-gray-800 p-3 hover:bg-gray-700 text-white lg:rounded px-2 mx-3 border border-white font-semibold' onClick={() =>{filterResult('Fashion Glasses')}}>Fashion </button>
          <button className='bg-gray-800 p-3 hover:bg-gray-700 text-white lg:rounded px-2 mx-3 border border-white font-semibold'onClick={() =>{filterResult('Eyeglasses')}}>Eyeglasses </button>
          <button className='bg-gray-800 p-3 hover:bg-gray-700 text-white lg:rounded px-2 mx-3 border border-white font-semibold'onClick={() =>{filterResult('Eyeglasses')}}>Eyeglasses </button>


        </Slider>

      </div>
      <h2 className='flex justify-center text-3xl font-semibold  mt-2'>Our Latest Products</h2>
      <div className="container mx-auto lg:max-w-full p-2 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.map((product) => (
            <div key={product.id} className="bg-white shadow-lg p-0.5 hover:shadow-2xl ">
              <Link to={`/products/${product.id}`}> {/* Use Link to navigate */}
                <img
                  src={product.colors[0].imagePath}
                  alt={`${product.name} - ${product.colors[0].colorName}`}
                  className="w-full h-40 object-cover"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-lg font-semibold mt-2">Rs.{product.price}</p>

              </Link>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
