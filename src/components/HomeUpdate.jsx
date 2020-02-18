import React from "react";
import PropTypes from "prop-types";

var tapListStyle = {
  wordSpacing:'5px',
  margin: '10px',
  backgroundColor: 'white',
  opacity:'.85',
}
function Greeting(){

  return (
    <div className ='updateText'>
    <h3> Just testingasdfasdfasdfasfd </h3>
    </div>
  );
}

function HomeUpdate(props){
  return (
  <div style = {tapListStyle}>
    <h2 className ='updateText'>{props.date}</h2>
    <p className ='updateText'>{props.update}</p>
    </div>
  );
}

HomeUpdate.propTypes = {
  date: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired,
};


export default HomeUpdate;
