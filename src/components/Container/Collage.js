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
            console.log(item)
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
                console.log(item)
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
                console.log(item)
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
                console.log(item)
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
                console.log(item)
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function showEventPicDiv(event) {
    fetch('https://photo-logger.herokuapp.com/log')
    .then((res) => res.json('https://photo-logger.herokuapp.com/log'))
    .then((data) => {
      console.log("This is data: ", data)
    })
    // const eventPicDiv = document.querySelector("#pictureDiv");
    // eventPicDiv.style.visibility = "visible";
    // eventPicDiv.classList.add("flip-in-ver-left");
    // var currentSrc = event.target.currentSrc;
    // var id = event.target.id;
    // var title = event.target.title;
    // console.log(event)
    
    // var enlargedImage = `<img src=${currentSrc} id=${currentSrc} class="col-12 col-md-10 enlargedImage vertical-center">
    //                     <div id="caption" class="caption mt-0">${title}
    //                       <button onClick="delete" data-id=${id} class="delete buttonCancel ml-3">
    //                         <i class="far fa-trash-alt delete" data-id=${id}></i>
    //                       </button>
    //                     </div>`;
    // if (eventPicDiv) {
    //   eventPicDiv.innerHTML = enlargedImage;
    // }

  }
};
export default Collage;
