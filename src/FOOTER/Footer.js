import React from 'react'
// import img1 from "./Image/truck.png";
import "../FOOTER/footer.css"

const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-12 ">
            <h5 className="f7">QUICK LINKS</h5>

            <a href="Quick" className="f1">
              HOME
            </a>
            <a href="Quick" className="f1">
              {" "}
              ABOUT US
            </a>

            <a href="Quick" className="f1">
              SERVICE
            </a>
            <a href="Quick" className="f1">
              {" "}
              CONTACT US
            </a>
          </div>

          <div className="col-lg-3 col-md-12">
            <h5 className="f7">ADDRESS</h5>

            <h5 className="f6">
              {" "}
              Om saels & Services,<br></br>
              No.17/29,Beerangi,Jetti kula st, Trichirappalli,Tamil nadu 62002
            </h5>
          </div>

          <div className="col-lg-3 col-md-12">
            <h5 className="f7">Help Needed?</h5>
            <br></br>
            <h5 className="f8">
              Direct Phone call :{" "}
              <a className="f15" href="phone">
                {" "}
                <i class="fa-solid fa-phone"></i>{" "}
              </a>
              <br></br> 8778377319
            </h5>

            <h5 className="f10">
              Mail with us:{" "}
              <a className="f16" href="message">
                <i class="fa-solid fa-message"></i>
              </a>
            </h5>
          </div>

          <div className="col-lg-3 col-md-12">
            <div className="f17"></div>
            <a href="Quick" className="f2">
              {" "}
              OM SCRAB & SALES
            </a>

            <div className="f14">Connect with us</div>

            <div className="f12">
              <a className="f13" href="twitter">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a className="f13" href="facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a className="f13" href="instagram">
                {" "}
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <marquee behavior="10" direction="left" className="m">
          {" "}
          {/* <img src={img1} alt="" height={100} width={100} /> */}
        </marquee>

        <h1 className="f11">Thank you for buying and selling</h1>

        <div className="footer1">
          <h4 className="f4">copyRights@NIDARSAN & SARAVANAN </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
