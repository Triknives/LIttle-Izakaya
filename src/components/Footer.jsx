import React from "react";
import PropTypes from 'prop-types';

const footerStyle = {
  backgroundColor: 'white',
  height:'25px',
  width:'60%',
  alignItems:'center',
  textAlign:'center',
  opacity:'.85',
  margin: '1vh auto',
}

function Footer(){
  return (
    <div style = {footerStyle}>
    <footer>&copy;2020 Design by Brett Cordell - Cordell.desu@gmail.com</footer>
    </div>
  );
}

Footer.propTypes = {
location: PropTypes.object
};

export default Footer;
