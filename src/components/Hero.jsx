import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar';


function Hero() {
    
    
  return (
  <>
   <Navbar/>
  <div className='h-1/2'> 
    <Carousel  autoPlay={true} autoFocus={true} infiniteLoop={true}  showThumbs={false}>
      <div >
        <img 
          src="https://images.unsplash.com/photo-1546914782-96b636ea44e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Carousel 1"
        />
        <p className="legend">  Ladies eyeglasses </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Carousel 2"
        />
        <p className="legend">Glasses of sight</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1608539733377-5557e02926b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Carousel 3"
        />
        <p className="legend">Fancy Glasses</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"
          alt="Carousel 4"
        />
        <p className="legend">Watches</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1513065200622-9a226a3c7adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Carousel 5"
        />
        <p className="legend">Googlels</p>
      </div>
    </Carousel>
    </div>

    </>

  );
}

export default Hero;
