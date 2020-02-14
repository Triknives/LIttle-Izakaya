import React from "react";
import PropTypes from "prop-types";

var tapListStyle = {
  wordSpacing:'5px',
  margin: '20px',
}

function HomeUpdate(props){
  return (
  <div style = {tapListStyle}>
    <h2>{props.date}</h2>
    <p>{props.update}</p>
    </div>
  );
}

HomeUpdate.propTypes = {
  date: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired,
};


export default HomeUpdate;
