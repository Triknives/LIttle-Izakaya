import React from "react";
import PropTypes from "prop-types";

var dishStyling = {
  wordSpacing:'5px',
  margin: '10px',
  backgroundColor: 'black',
  opacity:'.85',
  padding:'1vh',
}

function Dishes(props){
  return (
  <div style = {dishStyling}>
    <img src= {props.image}></img>
    <p className ='updateText'>{props.name}</p>
    <p className ='updateText'>{props.cost}</p>
    <p className ='updateText'>{props.info}</p>
    </div>
  );
}

Dishes.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};



export default Dishes;
