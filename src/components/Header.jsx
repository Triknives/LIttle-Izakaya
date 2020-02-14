import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  const headerStyle = {
    margin: '1vh auto',
    justifyContent:'left',
    backgroundImage: 'url(https://digjapan.travel/files/topics/11997_ext_80_en_0.jpg)',
    width:'60%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '1vh',
    color:'white',
    borderRadius: '2vh',
    overflow: 'hidden',
    alignItems: "center",
    textAlign:'center',
    opacity:'.9',
  }
  const links = {
    color: 'white',
  }
  return (
    <div style = {headerStyle}>
    <div className ='pubname'>Little Izakaya</div>
    <div style = {links}>
    <Link to="/">Home</Link> | <Link to="/TapList">Beers On Tap</Link> | <Link to="/Dishes">Dishes</Link>
    </div>
    </div>
  );
}


export default Header;
