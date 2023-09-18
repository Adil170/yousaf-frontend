import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';
import Navbar from '../components/Navbar';

function Checkout() {
    const cartItems = useSelector((state) => state.cart.cartItem); // Access cart data from Redux store

    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city , setCity] = useState('')
    const [postalCode ,setPostalCode ] = useState('')

    const dispatch = useDispatch();

    const handleOrderNow = () => {
        // Here, you can send the order data (address, phone number, and cart items) to your server/database.
        // You can use an API call or any other method to send the data.

        // After the order is placed, clear the cart.
        dispatch(clearCart());

        // Redirect to a thank you page or display a confirmation message.
        // You can use React Router or other routing methods for navigation.
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-4 p-4">
                <h1 className="text-2xl font-semibold">Checkout</h1>
                {/* Display cart items or order summary here */}
                <div className="my-4">
                    <label className="block text-gray-700">City:</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="block text-gray-700">Address:</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="block text-gray-700">Phone Number:</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                {/* Display cart items or order summary */}
                <div className="my-4">
                    <h2 className="text-xl font-semibold mb-2">Order Summary:</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between mb-2">
                                <span>{item.name}</span>
                                <span>Rs.{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xl font-semibold">
                        Total: Rs.
                        {cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0)}
                    </p>
                </div>
                <button
                    onClick={handleOrderNow}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Order Now
                </button>
            </div>
        </>
    );
}

export default Checkout;
