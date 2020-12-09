import React, { useState, useEffect } from "react";
import "../../style.css";

const Collage = () => {
  const [API, setAPI] = useState(null);
  const fetchURL = "https://photo-logger.herokuapp.com";
  const getAPI = () =>
    fetch(`${fetchURL}/log`).then((res) => res.json());

  useEffect(() => {
    getAPI().then((API) => setAPI(API), console.log(API));
  }, []);

  return (
    <div className="row p-3 mainCollageDIV" id="collageDivs">
      <div className="col-3 px-0">
        <img
          src="../image/Kyoto (Koyasu Pagoda - Kiyomizu).jpg"
          id="5fce6905879a4c0015d5a2db"
          onClick={showEventPicDiv}
          className="collageImageDIV firstDiv"
        />
      </div>
      <div className="col-5">
        <div className="row">
          {/* <!-- Second DIV --> */}
          <div className="col-12 px-0">
            <img
              src="../image/Maidono (Yasaka Jinja).jpg"
              id="5fce6aa7879a4c0015d5a2ea"
              onClick={showEventPicDiv}
              className="collageImageDIV secondDiv"
            />
          </div>
        </div>
        <div className="row">
          {/* <!-- Third DIV --> */}
          <div className="col-6 px-0">
            <img
              src="../image/Old Kyoto (Gion).jpg"
              id="5fce6ae1879a4c0015d5a2f5"
              onClick={showEventPicDiv}
              className="collageImageDIV thirdDiv"
            />
          </div>
          {/* <!-- Fourth DIV --> */}
          <div className="col-6 px-0">
            <img
              src="../image/20200304_222707.jpg"
              id="5fcf37ee9b56b600158d46f7"
              onClick={showEventPicDiv}
              className="collageImageDIV fourthDiv"
            />
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row">
          {/* <!-- Fifth DIV --> */}
          <div className="col-12 px-0">
            <img
              src="../image/20200303_134752.jpg"
              id="5fcf387a9b56b600158d470d"
              onClick={showEventPicDiv}
              className="collageImageDIV fifthDiv"
            />
          </div>
        </div>
        <div className="row">
          {/* <!-- Sixth DIV --> */}
          <div className="col-12 px-0">
            <img
              src="../image/20180903_162515.jpg"
              id="5fcf39529b56b600158d471c"
              onClick={showEventPicDiv}
              className="collageImageDIV sixthDiv"
            />
          </div>
        </div>
      </div>
    </div>
  );

  function showEventPicDiv() {
    const eventPicDiv = document.querySelector("#pictureDiv");
    eventPicDiv.style.visibility = "visible";
    eventPicDiv.classList.add("flip-in-ver-left");
  }
};
export default Collage;
