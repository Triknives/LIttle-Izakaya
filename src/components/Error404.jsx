
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Error404(props){
return (
  <div className = 'error-page'>
    <h2>Woah Woah easy! That's no page of ours!</h2>
    <h3>Would you like to return to our <Link to="/">Home Page</Link>?</h3>
  </div>
);
}

Error404.propTypes = {
location: PropTypes.object
};

export default Error404;
