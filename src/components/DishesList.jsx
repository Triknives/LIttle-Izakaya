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
   image: "https://image.shutterstock.com/image-photo/nankotsu-no-kushiyaki-japanese-grilled-600w-1627606975.jpg",
   name: "Nankotsu",
   cost: "6 USD",
   info: "Fried chicken cartilage. Goes great with Super Dry!",
 },
 {
   image: "https://image.shutterstock.com/image-photo/fried-cutlet-pork-vegetable-japanese-600w-631348373.jpg",
   name: "Chicken Katsu",
   cost: "6 USD",
   info: "A simple and savory chicken dish.",
 },
 {
   image: "https://image.shutterstock.com/image-photo/yakitori-japanese-chicken-barbecue-600w-579499555.jpg",
   name: "Yakitori",
   cost: "6 USD",
   info: "What would we be without Yakitori! You know the drill!",
 },
 {
   image: "https://image.shutterstock.com/image-photo/japanese-grilled-eel-sweet-sauce-600w-1288239334.jpg",
   name: "Unagi",
   cost: "6 USD",
   info: "A dish typically served during the hot Summer months.",
 },
 {
   image: "https://image.shutterstock.com/image-photo/asian-style-soup-udon-noodles-600w-1211162086.jpg",
   name: "Kake Udon",
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
