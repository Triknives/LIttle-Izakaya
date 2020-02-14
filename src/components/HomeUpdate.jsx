import React from "react";
import PropTypes from "prop-types";

function HomeUpdate(props){
  return (
    <div>
    <h3>{props.update}</h3>
    <h4>{props.date}</h4>
    <p>{props.updatecontent}</p>
    </div>
  );
}

HomeUpdate.propTypes = {
  update: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  updatecontent:PropTypes.string.isRequire,
};

export default HomeUpdate;
