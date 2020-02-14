import React from "react";
import PropTypes from "prop-types";
import HomeUpdate from "./HomeUpdate";

var scheduleStyle = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: 'black',
  padding: '1vh',
  opacity: '.7',
  borderRadius: '4vh',
  color: 'white',
}

const homeUpdateList = [
  {
    update:"Grand Opening!",
    date:"2/14/2020",
    updatecontent:"We'd like to take a chance to say Youkoso! (welcome) to Little Izakaya, a chance to experience and taste the atomoshpere of a small Roppongi styled izakaya. Please look into our NomiHoudai option for your larger parties(up to 3 hour bookings). We will have rolling updates as we increase our offerings in Japanese beers, along with other foriegn beers, and dishes!"
  }
]
function HomeUpdateList(){

  return (
    <div style = {scheduleStyle}>
    {homeUpdateList.map((homeUpdate, index) =>
      <HomeUpdate update={homeUpdate.update}
      date={homeUpdate.date}
      updatecontent={homeUpdate.updatecontent}
      key={index}/>
    )}
    </div>
  );
}

export default HomeUpdateList;
