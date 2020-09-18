import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import obama from "./obama.jpg";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

function Carousel() {
  function displayAlert() {
    alert("I was clicked");
  }
  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          "@media (max-width: 900px)": {
            width: "600px",
            height: "300px",
          },
          "@media (min-width: 900px)": {
            width: "960px",
            height: "600px",
          },
        }}
      >
        <div onClick={() => displayAlert()}>
          <img src={obama} alt="Obama" />
        </div>
        <div onClick={() => displayAlert()}>
          <img src={obama} alt="Obama" />
        </div>
        <div onClick={() => displayAlert()}>
          <img src={obama} alt="Obama" />
        </div>
        <div onClick={() => displayAlert()}>
          <img src={obama} alt="Obama" />
        </div>
        <div onClick={() => displayAlert()}>
          <img src={obama} alt="Obama" />
        </div>
      </Coverflow>
    </StyleRoot>
  );
}
export default Carousel;

// <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        //     <ol className="carousel-indicators">
        //         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //     </ol>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img
        //                 className="d-block w-100"
        //                 src={obama} alt="First    slide"/>
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 className="d-block w-100"
        //                 src={obama}/>
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 className="d-block w-100"
        //                 src={obama}/>
        //         </div>
        //     </div>
        //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Previous</span>
        //     </a>
        //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Next</span>
        //     </a>
        // </div>