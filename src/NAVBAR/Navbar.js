import React, { useEffect, useState } from "react";
import "../NAVBAR/navbar.css";
import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";
const Navbar = () => {
  useEffect(()=>{

    $(document).ready(function(){
      $(".fa-bars").click(function(){
        $(".drop-down").slideDown("slow")
      })
    })

    $(document).ready(function(){
      $(".fa-x").click(function(){
        $(".drop-down").slideUp("slow")
      })
    })
  })

  return (
    <>
      <div className="Navbar">
        <h5>OM SALES AND SERVICE</h5>
        <ul className="side-nav">
          <li>Home</li>
          <li>About</li>
          <li>Our Services</li>
          <li>Contact Us</li>
        </ul>
        <i className="fa-solid fa-bars"  ></i>
      </div>
      <ul className="drop-down" >
      <i class="fa-solid fa-x"></i>
        <li>Home</li>
        <li>About</li>
        <li>Our Services</li>
        <li>Contact Us</li>
      </ul>
    </> 
  );
};

export default Navbar;
