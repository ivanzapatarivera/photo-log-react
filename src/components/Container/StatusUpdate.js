import "../../style.css";

const StatusUpdate = () => {
  return (
    <div>
      <div className="status statusText text-center" id="statusBox">
        <div id="statusText" className="col-12">
          <div id="status" className="statusForm mx-auto">
            <form
              action="/status"
              method="post"
              id="formStatus"
              className="text-left"
            >
              <textarea
                name="statusUpdate"
                id="statusUpdate"
                cols="100%"
                rows="3"
                placeholder="What's on your mind?"
                className="px-3 py-1"
              ></textarea>
              <button
                className="button btn px-2 py-1"
                id="buttonSubmitStatus"
                onClick={hideStatusBox}
              >
                <i className="far fa-paper-plane"></i>
              </button>
              <span
                className="buttonCancel btn py-1 px-2 ml-1"
                id="buttonCancelStatus"
                onClick={hideStatusBox}
              >
                <i className="fas fa-times"></i>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className="col-12 text-center">
        <button
          className="px-4 py-1 postStatusBtn"
          id="postStatusBtn"
          onClick={showStatusBox}
        >
          <i className="fas fa-feather-alt"></i>
        </button>
      </div>
    </div>
  );

  // This section will display the status box
  function showStatusBox() {
    const statusBox = document.querySelector("#statusBox");

    statusBox.style.display = "flex";
    statusBox.classList.add("scale-in-center");
  }
  function hideStatusBox() {
    const statusBox = document.querySelector("#statusBox");

    statusBox.style.display = "none";
    statusBox.classList.remove("scale-in-center");
  }
};

export default StatusUpdate;
