import React from "react";
import PropTypes from "prop-types";

var dishStyling = {
  wordSpacing:'5px',
  margin: '10px',
  padding:'1vh',
  height:'160px',
  width: '280px',
  lineHeight:'28px',
  backgroundColor: 'black',
  color: 'white',
  opacity: '.8',
}

function Dishes(props){
  return (
    <div className = "food">
    <div className = "zoom">
    <img src= {props.image}></img>
    </div>
    <div style = {dishStyling}>
    <p className ='updateText'>{props.name}
    <br/>
      {props.cost}
    <br/>
      {props.info}</p>
    </div>
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
