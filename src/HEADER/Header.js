import React from "react";
// import "../HEADER/header.css";
import "../HEADER/header2.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="header-titles">
          <li>
            <span>
              <i class="fa-regular fa-envelope"></i>
            </span>
            omscrapbuyers@gmail.com
          </li>
          <li>
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            8778377319
          </li>
          <li>
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            5+years
          </li>
        </ul>

        <ul className="social-icons">
          <li>
            <span>
              <i class="fa-brands fa-whatsapp"></i>
            </span>
          </li>
          <li>
            <span>
              <i class="fa-regular fa-envelope"></i>
            </span>
          </li>
          <li>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
