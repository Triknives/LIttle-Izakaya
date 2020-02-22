import React from "react";
import HomeUpdate from "./HomeUpdate";
import PropTypes from 'prop-types';


var updatesStyling = {
  margin: '1vh auto',
  display:'flex',
  width: '58%',
  flexWrap: 'wrap',
  justifyContent:'center',
  padding: '1vh',
}

function HomeUpdateList(props){
  return (
    <div style = {updatesStyling}>
    <img className ='toastimg'src="https://media.gettyimages.com/photos/coworkers-in-japanese-restaurant-toasting-drinks-picture-id1153738800?s=2048x2048" alt="Group of people toasting"></img>
    <p className = 'greeting'>Welcome to Little Izakaya! We hope to bring you a small taste of a Japanese Pub or "Izakaya" with a few of the more popular dishes, and beers found in Kanagawa!</p>
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
