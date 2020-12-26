import React, { useState, useEffect } from "react";
import "../../style.css";

const Collage = () => {
  const [api, setApi] = useState(null);
  const fetchURLCollage = "https://photo-logger.herokuapp.com";
  const getApi = () => fetch(`${fetchURLCollage}/log`).then(
    (res) => res.json());
  
  useEffect(() => {
    getApi().then((api) => setApi(api));
  }, []);

  
  return (
    <div className="row p-3 mainCollageDIV" id="collageDivs">
      {api?.map((item, index, array) =>
        index === array.length - 6 ? (
          
          <div className="col-3 px-0">
            <img
              src={fetchURLCollage + item.URL.split("..").join("")}
              id={item._id}
              onClick={showEventPicDiv}
              className="collageImageDIV firstDiv"
            />
          </div>
        ) : (
          console.log("...")
        )
      )}
      <div className="col-5">
        {api?.map((item, index, array) =>
          index === array.length - 5 ? (
            <div className="row">
              {/* <!-- Second DIV --> */}
              <div className="col-12 px-0">
                <img
                  src={fetchURLCollage + item.URL.split("..").join("")}
                  id={item._id}
                  onClick={showEventPicDiv}
                  className="collageImageDIV secondDiv"
                />
              </div>
            </div>
          ) : (
            console.log("...")
          )
        )}

        <div className="row">
          <div className="col-6 px-0">
            {/* <!-- Third DIV --> */}
            {api?.map((item, index, array) =>
              index === array.length - 4 ? (
                <img
                  src={fetchURLCollage + item.URL.split("..").join("")}
                  id={item._id}
                  onClick={showEventPicDiv}
                  className="collageImageDIV thirdDiv"
                />
              ) : (
                console.log("...")
              )
            )}
          </div>

          {/* <!-- Fourth DIV --> */}
          <div className="col-6 px-0">
            {api?.map((item, index, array) =>
              index === array.length - 3 ? (
                <img
                  src={fetchURLCollage + item.URL.split("..").join("")}
                  id={item._id}
                  onClick={showEventPicDiv}
                  className="collageImageDIV fourthDiv"
                />
              ) : (
                console.log("...")
              )
            )}
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row">
          {/* <!-- Fifth DIV --> */}
          <div className="col-12 px-0">
            {api?.map((item, index, array) =>
              index === array.length - 2 ? (
                <img
                  src={fetchURLCollage + item.URL.split("..").join("")}
                  id={item._id}
                  onClick={showEventPicDiv}
                  className="collageImageDIV fifthDiv"
                />
              ) : (
                console.log("...")
              )
            )}
          </div>
        </div>
        <div className="row">
          {/* <!-- Sixth DIV --> */}
          <div className="col-12 px-0">
            {api?.map((item, index, array) =>
              index === array.length - 1 ? (
                <img
                  src={fetchURLCollage + item.URL.split("..").join("")}
                  id={item._id}
                  onClick={showEventPicDiv}
                  className="collageImageDIV sixthDiv"
                />
              ) : (
                console.log("...")
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function showEventPicDiv(event) {
    var eventPicDiv = document.querySelector("#pictureDiv");
    fetch("https://photo-logger.herokuapp.com/log", {
      method: "get",
      dataType: "jsonp",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json("https://photo-logger.herokuapp.com/log"))
      .then((data) => {
        data.map((dataMap) => {
          const title = dataMap.title;
          const id = dataMap._id;
          const description = dataMap.description;
          const URL = dataMap.URL;

          // Displays fullscreen DIV with dynamically generated albums of traveled places
          eventPicDiv.style.visibility = "visible";
          eventPicDiv.classList.add("flip-in-ver-left");
          var currentSrc = event.target.currentSrc;
          var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage vertical-center">
                              <div id="caption" class="caption mt-0">${description}
                                <button onClick="delete" data-id=${id} class="delete buttonCancel ml-3">
                                  <i class="far fa-trash-alt delete" data-id=${id}></i>
                                </button>
                              </div>`;
          if (eventPicDiv) {
            eventPicDiv.innerHTML = enlargedImage;
          }
        });
      });
  }
};
export default Collage;
