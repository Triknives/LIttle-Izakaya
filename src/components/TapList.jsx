import React from "react";
import BeersOnTap from "./BeersOnTap";

var scheduleStyle = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: 'black',
  padding: '2vh',
  opacity: '.7',
  borderRadius: '4vh',
  color: 'white',
  wordSpace:'5px',
}


const tapList = [
 {
    brand: "Asahi Super Dry",
    size: "Pint",
    acontent: "4.9%",
    cost: "4.00USD"
 },
 {
   brand: "Asahi Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Asahi Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Asahi Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Asahi Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Asahi Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 }
];

function TapList(){

  return (
    <div style = {scheduleStyle}>
      {tapList.map((beersOnTap, index) =>
        <BeersOnTap brand={beersOnTap.brand}
        size={beersOnTap.size}
        acontent={beersOnTap.acontent}
        cost={beersOnTap.cost}
        key={index}/>
      )}
    </div>
  );
}

export default TapList;
