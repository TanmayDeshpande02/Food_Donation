import React from 'react';
import backgroundImage from './image1.jpg';
const HomeAbout = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    flex: '1 1 41rem',
  };

  const imageImgStyle = {
    width: '100%',
  };

  const contentStyle = {
    flex: '1 1 41rem',
    padding: '3rem',
    background: 'var(--light-bg)',
  };

  const h3Style = {
    fontSize: '3rem',
    color: 'var(--black)',
  };

  const pStyle = {
    fontSize: '1.5rem',
    padding: '1rem 0',
    lineHeight: 2,
    color: 'var(--black)',
  };

  return (
    <section className="home-about" style={containerStyle}>
      <div className="image" style={imageStyle}>
        <img src={backgroundImage} alt="" style={imageImgStyle} />
      </div>

      <div className="content" style={contentStyle}>
        <h3 style={h3Style}>about us</h3>
        <p style={pStyle}>
          This website aims to redistribute excess food from weddings, parties, events to those who are hungry.
          We aim to bring benefits across the spectrum of society and help provide access to food to those who don’t have adequate means to access it.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
