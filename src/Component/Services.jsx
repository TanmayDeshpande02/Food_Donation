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
    paddingLeft: '1.5rem', 
    paddingBottom: '1.5rem', 
  };


  return (
    <section className="services" style={{textAlign:'center'}} >
      <h1 className="heading-title">Our Services</h1>
      <div style={containerStyle} className="box-container">
        <div style={boxStyle} className="box">
          <h1>Just want to make a small Change</h1>
          <button className="hover-button">
            <a className="link"  href="">
              Click Here to donate
            </a>
          </button>
        </div>

        <div style={boxStyle} className="box">
          <h1>In Need?</h1>
          <button  className="hover-button">
            <a className="link" href="">
              Click Here to Recieve
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
