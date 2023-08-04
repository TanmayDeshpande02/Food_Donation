import React from 'react';
import backgroundImage from './image1.jpg';

const Home = () => {
  const divStyle = {
    background: `url(${backgroundImage}) no-repeat`,
    backgroundSize: 'cover',
    position: 'relative',
    height: '100vh',
  };
  const contentStyle = {
    position: 'absolute', // Set the content to an absolute position within the container
    top: '50%', // Position the content at the vertical center
    left: '50%', // Position the content at the horizontal center
    transform: 'translate(-50%, -50%)', // Center the content precisely
    textAlign: 'center', // Center the text within the content
    color: 'white', // Set the text color
    fontSize: '36px',

  };
  return (
    <>
       <section className="home">
     <div id="carouselE" className="slide" style={divStyle} >
        <div className="content"  style={contentStyle}>
          <span>Donate Help !!!</span>
          <h3>Giving is not about making Donations</h3>
          <br />
          <h3>" Its about making a change"</h3>
        </div>
      </div>
    </section>
    </>
  )
}
export default Home;
