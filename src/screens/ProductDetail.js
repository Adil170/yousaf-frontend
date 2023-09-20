import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../components/constents';
import Navbar from '../components/Navbar';
import './ProductDetail.css';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import  {Link} from 'react-router-dom'


function ProductDetail() {
    const dispatch = useDispatch()
  
    const handleAddToCart = () => {
       
        const selectedProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          color: selectedColor,
        };
 
        dispatch(addToCart(selectedProduct));
     
      }
  const { productId } = useParams(); // Extract the productId from route parameters

  // Find the product based on productId
  const product = productsData.find((product) => product.id === parseInt(productId));

  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Initialize with the first color

  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initialize with the first image

  const [isZoomedIn, setIsZoomedIn] = useState(false);


  // ...

  // Function to toggle zoom in/out
  const toggleZoom = () => {
    setIsZoomedIn(!isZoomedIn);
  };

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  // Handle color selection
  const handleColorSelection = (color, index) => {
    setSelectedColor(color);
    setSelectedImageIndex(index);
  };

  // Handle image navigation
  const navigateImages = (direction) => {
    const newIndex =
      direction === 'next'
        ? (selectedImageIndex + 1) % product.colors.length
        : (selectedImageIndex - 1 + product.colors.length) % product.colors.length;
    setSelectedImageIndex(newIndex);
    setSelectedColor(product.colors[newIndex]);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-28 md:h-full">
        <div className="lg:flex lg:justify-between border lg:shadow-lg  lg:p-28 p-2 ">
          <div className={`lg:w-1/2 relative ${isZoomedIn ? 'zoomed-in' : 'zoomed-out'}`}>
            <img
              src={selectedColor.imagePath}
              alt={product.name}
              className="w-full h-auto lg:max-h-96 object-cover"
              onClick={toggleZoom}
            />
            <button
              onClick={() => navigateImages('prev')}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={() => navigateImages('next')}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-full"
            >
              &gt;
            </button>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-4">
            <h2 className="text-2xl font-semibold mt-5">{product.name}</h2>
            <p className="text-lg font-semibold mt-2">Rs.{product.price}</p>

            <p className="mt-4">{product.description}</p>
            <p className="mt-4">Size: {product.size}</p>

            {/* Color options */}
            <div className="mt-4">
              <p className="font-semibold">Available Colors:</p>
              <div className="flex space-x-4 mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={color.colorName}
                    onClick={() => handleColorSelection(color, index)}
                    className={`w-8 h-8 rounded-full border border-gray-400 ${
                      selectedColor === color ? 'border-blue-500' : ''
                    }`}
                    style={{ backgroundColor: color.colorCode }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Add more product details here */}
            <div className="mt-4">
              <Link to='/cart'>
              <button onClick={() => handleAddToCart(product)} className="flex bg-gray-700 hover:bg-gray-950 text-white font-bold py-3  px-9  justify-around lg:px-32 rounded mt-10">
                Add to Cart
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
