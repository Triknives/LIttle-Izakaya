import React from "react";
import HomeUpdate from "./HomeUpdate";
import PropTypes from 'prop-types';


var updatesStyling = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  padding: '1vh',
}

function HomeUpdateList(props){
  return (
    <div style = {updatesStyling}>
    <p className = 'greeting'>Welcome to Little Izakaya! We hope to bring you a small taste of a Japanese Pub or "Izakaya" with a little bit of the more popular dishes, and beers found in Kanagawa!</p>
    {props.homeUpdateList.map((homeUpdate, index) =>
      <HomeUpdate authors={homeUpdate.authors}
      postContent={homeUpdate.postContent}
      key={index}/>
    )}
    </div>
  );
}

HomeUpdateList.propTypes = {
  homeUpdateList: PropTypes.array
};


export default HomeUpdateList;
