import "../../style.css";
import Collage from './Collage'

function PhotoLogs() {
  return (
    <div>
      <div
        className="row mx-auto p-1 logNewPhotoForm fade-in"
        id="logNewPhotoFrame"
        style={{ display: "none" }}
      >
        {/* Form to log neww photos */}
        <div className="col-10 col-md-6">
          <div className="card-body col-12 col-md-8 mx-auto logNewPhotoFormDiv">
            <h5 className="text-center">Log your Photo!</h5>
            <form action="/upload" method="post" encType="multipart/form-data">
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
            <Collage />
            {/* <!-- First DIV --> */}
            
            
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-12 col-md-12 mx-auto text-center fullScreenDiv"
          id="pictureDiv"
          onClick={hideEventPicDiv}
        >
          
        </div>
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

  function hideEventPicDiv() {
    const eventPicDiv = document.querySelector("#pictureDiv");
    eventPicDiv.style.visibility = "hidden";
    eventPicDiv.innerHTML = "";
    eventPicDiv.classList.remove("flip-in-ver-left");
  }
}

export default PhotoLogs;
