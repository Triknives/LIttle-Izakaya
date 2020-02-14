import React from "react";
import PropTypes from "prop-types";
var tapListStyle = {
  wordSpacing:'5px',
  margin: '20px',
}
function BeersOnTap(props){
  return (
      <div style = {tapListStyle}>
      <h3>{props.brand}</h3>
      <h4>{props.size}</h4>
      <p>{props.acontent}</p>
      <p><em>{props.cost}</em></p>
    </div>
  );
}

BeersOnTap.propTypes = {
  brand: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  acontent: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};

export default BeersOnTap;
