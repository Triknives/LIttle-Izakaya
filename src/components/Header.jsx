import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle = {
    margin: '1vh auto',
    justifyContent:'left',
    backgroundImage: "url(https://digjapan.travel/files/topics/11997_ext_80_en_0.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '2vh',
    color:'white',
    textShadow: '.1vh .1vh .7vh #000000',
    borderRadius: '4vh',
    border: '4px solid white',
    overflow: 'hidden',
    width:'40%',
    alignItems: "center",
    textAlign:'center',
  }

  var links = {
    color: 'white',
  }
  return (
    <div style = {headerStyle}>
    <h1>Little Izakaya</h1>
    <div style = {links}>
    <Link to="/">Home</Link> | <Link to="/Ontap">Beers On Tap</Link> | <Link to="/Dishes">Dishes</Link>
    </div>
    </div>
  );
}


export default Header;
