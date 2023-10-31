import React from 'react'
import {HashLink} from "react-router-hash-link"

function Header() {
  return (
    <nav>

    <h1>Champions</h1>
    <main className="link">  
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/about"}>About</HashLink>
        <HashLink to={"/brands"}>Brands</HashLink>
        <HashLink to={"/services"}>Services`</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
    </main>
      
    </nav>
  );
}

export default Header;
