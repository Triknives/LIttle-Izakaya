import React from "react";
import PropTypes from "prop-types";

var tapListStyle = {
  wordSpacing:'5px',
  margin: '10px',
  backgroundColor: 'white',
  opacity:'.85',
}

function HomeUpdate(props){
  return (
    <div style = {tapListStyle}>
    <h3>{props.authors}</h3>
    <p>{props.postContent}</p>
    </div>
  );
}

HomeUpdate.propTypes = {
  authors: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
};


export default HomeUpdate;
