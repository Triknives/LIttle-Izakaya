import React from "react";
import PropTypes from 'prop-types';

function Footer(){
  return (
    <div className ='footer'>
    <footer>&copy;2020 Design by Brett Cordell - Cordell.desu@gmail.com</footer>
    </div>
  );
}

Footer.propTypes = {
location: PropTypes.object
};

export default Footer;
