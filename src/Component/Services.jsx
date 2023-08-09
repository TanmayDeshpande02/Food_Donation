import React from 'react';

const Services = () => {
  const containerStyle = {
    display: 'grid',
    borderRadius: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
  };

  const boxStyle = {
    borderRadius: '10px',
    height: '190px',
    padding: '2rem',
    textAlign: 'center',
    background: 'var(--main-color)',
    backgroundColor: 'rgb(29, 33, 113)',
    cursor: 'pointer',
    color: '#eee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#eee',
    fontWeight: 'bold',
  };

  return (
    <section className="services" style={{ textAlign: 'center' }}>
      <h1 className="heading-title">Our Services</h1>
      <div style={containerStyle} className="box-container">
        <div style={boxStyle} className="box">
          <h1 style={headingStyle}>Just want to make a small Change</h1>
          <button className="hover-button">
            <a style={linkStyle} href="/AddLOF">
              Click Here to donate
            </a>
          </button>
        </div>

        <div style={boxStyle} className="box">
          <h1 style={headingStyle}>In Need?</h1>
          <button className="hover-button">
            <a style={linkStyle} href="/show">
              Click Here to Receive
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
