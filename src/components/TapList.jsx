import React from "react";
import BeersOnTap from "./BeersOnTap";

var scheduleStyle = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: 'black',
  padding: '1vh',
  opacity: '.7',
  color: 'white',
}


const tapList = [
 {
    brand: "Super Dry",
    size: "Pint",
    acontent: "4.9%",
    cost: "4.00USD"
 },
 {
   brand: "Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Super Dry",
   size: "Pint",
   acontent: "4.9%",
   cost: "4.00USD"
 },
 {
   brand: "Super Dry",
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
