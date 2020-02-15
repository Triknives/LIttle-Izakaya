import React from "react";
import Dishes from "./Dishes";

var dishesStyling = {
  display:'flex',
  margin: '1vh auto',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  padding: '1vh',
}

const dishesList = [
 {
    image: "https://image.shutterstock.com/image-photo/chicken-karaage-black-bowl-dark-600w-1642919305.jpg",
    name: "Karaage",
    cost: "8 USD",
    info: "A common fried chicken dish, served with tartar.",
 },
 {
   image: "https://image.shutterstock.com/image-photo/deepfried-soft-chicken-bone-ball-600w-623353991.jpg",
   name: "Nankotsu",
   cost: "6 USD",
   info: "Fried chicken cartilage. Goes great with Super Dry!",
 },
 {
   image: "https://image.shutterstock.com/image-photo/asian-style-soup-udon-noodles-600w-1211162086.jpg",
   name: "kake Udon",
   cost: "9 USD",
   info: "A very popular, and common noodle flavoring found in Japan.",
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
