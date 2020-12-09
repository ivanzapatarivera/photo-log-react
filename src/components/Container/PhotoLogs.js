import "../../style.css";

function PhotoLogs() {
  return (
    <div>
      <div
        class="row mx-auto p-1 logNewPhotoForm fade-in"
        id="logNewPhotoFrame"
        style={{ display: "none" }}
      >
        {/* Form to log neww photos */}
        <div class="col-10 col-md-6">
          <div className="card-body col-12 col-md-8 mx-auto logNewPhotoFormDiv">
            <h5 className="text-center">Log your Photo!</h5>
            <form action="/upload" method="post" enctype="multipart/form-data">
              <label className="btn btn-primary">
                <i className="fa fa-image"></i> Photo{" "}
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  onChange={previewFileName}
                  style={{ display: "none" }}
                />
              </label>
              <div id="previewFileName"></div>
              <button
                className="button btn"
                onClick={closeLogNewPhotoFrame}
                type="submit"
                id="newImageSubmit"
              >
                <i className="fas fa-check"></i>
              </button>
              <span
                className="button buttonCancel btn ml-1"
                id="logNewPhotoFormCancelBtn"
                onClick={closeLogNewPhotoFrame}
              >
                <i className="fas fa-times"></i>
              </span>
            </form>
          </div>
        </div>
      </div>

      {/* Structure for recent photo logs */}
      <div className="row picturesWall" id="picturesCollage">
        <div className="col-12">
          <h4 className="text-center pt-3" id="picturesCollageHeading">
            Recent PhotoLogs
          </h4>
          <div className="row p-3 mainCollageDIV" id="collageDivs">
            {/* <!-- First DIV --> */}
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
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-12 mx-auto text-center fullScreenDiv"
          id="pictureDiv"
          onClick={hideEventPicDiv}
        ></div>
      </div>
    </div>
  );

  function closeLogNewPhotoFrame() {
    const logNewPhotoFrame = document.querySelector("#logNewPhotoFrame");
    const previewFileName = document.getElementById("previewFileName");
    if (logNewPhotoFrame.style.display === "flex") {
      logNewPhotoFrame.style.display = "none";
      logNewPhotoFrame.classList.remove("fade-in");
      previewFileName.innerHTML = ""
    } else {
      logNewPhotoFrame.style.display = "flex";
      logNewPhotoFrame.classList.add("fade-in");
    }
  }

  function previewFileName() {
    var uploadBtn = document.getElementById("upload");
    const previewFileName = document.getElementById("previewFileName");
    var uploadBtnArr = uploadBtn.value + "";
    uploadBtnArr = uploadBtnArr.split("\\");
    var i = uploadBtnArr.length - 1;
    var fileName = uploadBtnArr[i];   
    console.log(uploadBtnArr);
    console.log(fileName);    
    console.log(`You've selected this file: `, uploadBtn.value);
    previewFileName.innerText = `Would you like to upload ${fileName} ?`;
  }

  function showEventPicDiv() {
    const eventPicDiv = document.querySelector("#pictureDiv");
    eventPicDiv.style.visibility = "visible";
    eventPicDiv.classList.add("flip-in-ver-left");
  }

  function hideEventPicDiv() {
    const eventPicDiv = document.querySelector("#pictureDiv");
    eventPicDiv.style.visibility = "hidden";
    eventPicDiv.innerHTML = "";
    eventPicDiv.classList.remove("flip-in-ver-left");
  }
}

export default PhotoLogs;
