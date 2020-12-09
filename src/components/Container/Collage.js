import React, { useState, useEffect } from "react";
import "../../style.css";

const Collage = () => {
  const [api, setApi] = useState(null);
  const fetchURL = "https://photo-logger.herokuapp.com";
  const getApi = () => fetch(`${fetchURL}/log`).then((res) => res.json());

  useEffect(() => {
    getApi().then((api) => setApi(api));
  }, []);

  return (
    <div className="row p-3 mainCollageDIV" id="collageDivs">
      {api?.map((item, index, array) =>
        index === array.length - 6 ? (
          <div className="col-3 px-0">
            <img
              src={fetchURL + item.URL.split("..").join("")}
              id="5fce6905879a4c0015d5a2db"
              onClick={showEventPicDiv}
              className="collageImageDIV firstDiv"
            />
          </div>
        ) : (
          console.log("yes")
        )
      )}
      <div className="col-5">
        {api?.map((item, index, array) =>
          index === array.length - 5 ? (
            <div className="row">
              {/* <!-- Second DIV --> */}
              <div className="col-12 px-0">
                <img
                  src={fetchURL + item.URL.split("..").join("")}
                  id="5fce6aa7879a4c0015d5a2ea"
                  onClick={showEventPicDiv}
                  className="collageImageDIV secondDiv"
                />
              </div>
            </div>
          ) : (
            console.log("yes")
          )
        )}

        <div className="row">
          <div className="col-6 px-0">
            {/* <!-- Third DIV --> */}
            {api?.map((item, index, array) =>
              index === array.length - 4 ? (
                <img
                  src={fetchURL + item.URL.split("..").join("")}
                  id="5fce6ae1879a4c0015d5a2f5"
                  onClick={showEventPicDiv}
                  className="collageImageDIV thirdDiv"
                />
              ) : (
                console.log("yes")
              )
            )}
          </div>

          {/* <!-- Fourth DIV --> */}
          <div className="col-6 px-0">
            {api?.map((item, index, array) =>
              index === array.length - 3 ? (
                <img
                  src={fetchURL + item.URL.split("..").join("")}
                  id="5fcf37ee9b56b600158d46f7"
                  onClick={showEventPicDiv}
                  className="collageImageDIV fourthDiv"
                />
              ) : (
                console.log("yes")
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
                  src={fetchURL + item.URL.split("..").join("")}
                  id="5fcf387a9b56b600158d470d"
                  onClick={showEventPicDiv}
                  className="collageImageDIV fifthDiv"
                />
              ) : (
                console.log("yes")
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
                  src={fetchURL + item.URL.split("..").join("")}
                  id="5fcf39529b56b600158d471c"
                  onClick={showEventPicDiv}
                  className="collageImageDIV sixthDiv"
                />
              ) : (
                console.log("yes")
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function showEventPicDiv(event) {
    var eventPicDiv = document.querySelector("#pictureDiv");
    // console.log(event);
    // const pictureDiv = document.querySelector("#pictureDiv");
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
          console.log(title, id, description, URL)

          /*        PREVIOUS CARDS CARROUSEL LAYOUT --- DO NOT DELETE
        var card = `<div class="cards mx-auto text-center col-4 col-lg-2" id=${id}>
                      <p class="mt-4" data-id=${id}>
                      <p><img src=${URL} class="cardImage" /><br></p>
                      <span class="cardTitle">${title}&nbsp;<br>
                        <span onClick="delete" data-id=${id} class="delete">
                          <i class="far fa-trash-alt delete" data-id=${id}></i>
                        </span>
                      </span></p>
                    </div>`;

        event.insertAdjacentHTML("beforeend", card);
*/

          // Displays fullscreen DIV with dynamically generated albums of traveled places
         
            eventPicDiv.style.visibility = "visible";
            eventPicDiv.classList.add("flip-in-ver-left");
            var currentSrc = event.target.currentSrc
            var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage vertical-center">
                              <div id="caption" class="caption mt-0">${description}
                                <button onClick="delete" data-id=${id} class="delete buttonCancel ml-3">
                                  <i class="far fa-trash-alt delete" data-id=${id}></i>
                                </button>
                              </div>`;
            if (eventPicDiv) {
              eventPicDiv.innerHTML = enlargedImage;
            }

            // Changes albums of traveled places visibility
        
              // if (eventPicDiv) {
              //   eventPicDiv.style.visibility = "hidden";
              //   eventPicDiv.innerHTML = "";
              //   eventPicDiv.classList.remove("flip-in-ver-left");
              // }
  
        });
      });
  }
};
export default Collage;
