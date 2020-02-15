import React from "react";
import Dishes from "./Dishes";

var dishesStyling = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  padding: '1vh',
}

const dishesList = [
 {
    image: '"https://image.shutterstock.com/image-photo/chicken-karaage-black-bowl-dark-600w-1642919305.jpg"',
    name: "Karage",
    cost: "12 USD",
    info: "A common fried chicken dish, served with tartar.",
 },
 {
   date: "2/11/2020",
   update: "We've begun hiring for staff to support demand for our delicious food! If you are looking for Part-time or Full-time work and enjoy a fast paced environment look no further! Send an e-mail to cordell.desu@gmail.com to inquire!",
 },
];
function DishesList(){

  return (
    <div style = {dishesStyling}>
      {dishesList.map((dishes, index) =>
        <Dishes image={dishes.image}
        name={dishes.name}
        cost={dishes.cost}
        info={dishes.info}
        key={index}/>
      )}
    </div>
  );
}

export default DishesList;
