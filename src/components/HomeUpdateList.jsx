import React from "react";
import HomeUpdate from "./HomeUpdate";

var updatesStyling = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: 'black',
  padding: '1vh',
  opacity: '.7',
  borderRadius: '2vh',
  color: 'white',
}

const homeUpdateList = [
 {
    date: "2/14/2020",
    update: "We'd like to take a chance to say Youkoso! (welcome) to Little Izakaya, a chance to experience and taste the atomoshpere of a small Roppongi styled izakaya. Please look into our NomiHoudai option for your larger parties(up to 3 hour bookings). We will have rolling updates as we increase our offerings in Japanese beers, along with other foriegn beers, and dishes!",
 },
 {
   date: "2/14/2020",
   update: "We'd like to take a chance to say Youkoso! (welcome) to Little Izakaya, a chance to experience and taste the atomoshpere of a small Roppongi styled izakaya. Please look into our NomiHoudai option for your larger parties(up to 3 hour bookings). We will have rolling updates as we increase our offerings in Japanese beers, along with other foriegn beers, and dishes!",
 },
 {
   date: "2/14/2020",
   update: "We'd like to take a chance to say Youkoso! (welcome) to Little Izakaya, a chance to experience and taste the atomoshpere of a small Roppongi styled izakaya. Please look into our NomiHoudai option for your larger parties(up to 3 hour bookings). We will have rolling updates as we increase our offerings in Japanese beers, along with other foriegn beers, and dishes!",
 },
 {
   date: "2/14/2020",
   update: "We'd like to take a chance to say Youkoso! (welcome) to Little Izakaya, a chance to experience and taste the atomoshpere of a small Roppongi styled izakaya. Please look into our NomiHoudai option for your larger parties(up to 3 hour bookings). We will have rolling updates as we increase our offerings in Japanese beers, along with other foriegn beers, and dishes!",
 }
];
function HomeUpdateList(){

  return (
    <div style = {updatesStyling}>
      {homeUpdateList.map((homeUpdate, index) =>
        <HomeUpdate date={homeUpdate.date}
        update={homeUpdate.update}
        key={index}/>
      )}
    </div>
  );
}

export default HomeUpdateList;
