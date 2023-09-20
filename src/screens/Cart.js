import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseCartQuantity, clearCart, addToCart } from '../slices/cartSlice';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItem);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart({ id: productId }));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseCartQuantity({ id: productId }));
    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(addToCart({ id: productId }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-4 p-4">
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white shadow-lg p-4 my-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={item.color.imagePath}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-full mr-4"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p>Price: Rs.{item.price }</p>
                                            <p>Total Price: Rs.{item.price * item.cartQuantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => handleDecreaseQuantity(item.id)}
                                            className="bg-gray-200 px-2 py-1 rounded-full mr-2"
                                        >
                                            -
                                        </button>
                                        <p>{item.cartQuantity}</p>
                                        <button
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                            className="bg-gray-200 px-2 py-1 rounded-full ml-2"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => handleRemoveFromCart(item.id)}
                                            className="bg-gray-200 px-2 py-1 rounded-full ml-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={handleClearCart}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Clear Cart
                            </button>

                            <p className="text-xl font-semibold">
                                Total: $
                                {cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0)}
                            </p>
                        </div>
                        <div className=' flex justify-end mt-4'>
                            <Link to="/checkout">
                                <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-5  rounded font-bold">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </>
                )}

            </div>
        </>
    );
}

export default Cart;
