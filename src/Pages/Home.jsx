import React from 'react';
import backgroundImage from './image1.jpg';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Services } from '../Component';

const Home = () => {
  const divStyle = {
    background: `url(${backgroundImage}) no-repeat`,
    backgroundSize: 'cover',
    position: 'relative',
    height: '100vh',
  };
  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    borderRadius:'5px',
    padding: '20px', // Add padding for better visibility
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with opacity
    color: 'white',
    fontSize: '36px',
    opacity: 0,
    animation: 'fade-in 2s ease-out forwards',
  };

  return (
    <>
      <style>
        {`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translate(-50%, -60%);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
        `}
      </style>
      <Navbar />
      <section className="home">
        <div id="carouselE" className="slide" style={divStyle}>
          <div className="content" style={contentStyle}>
            <span>Donate Help !!!</span>
            <h3>Giving is not about making Donations</h3>
            <br />
            <h3>" Its about making a change"</h3>
          </div>
        </div>
      </section>
      <Services />
      <Footer />
    </>
  );
};

export default Home;
