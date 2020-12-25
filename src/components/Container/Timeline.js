import "../../style.css";

function Timeline() {
  return (
    <div className="row">
      <div className="col-12 my-4">
        <h3 className="text-center timeline">Timeline</h3>
        <div className="mx-auto px-2" id="previousStatus">
          <div
            className="mt-3 col-12 col-md-12 mx-auto card text-left px-3 py-2 cardStatus"
            data-id="5fcf169b4c7f130015840131"
          >
            <span style={{fontSize: ".8rem"}}>
              Created on: 12/08/2020 @06:00:59
              <span onclick="delete" className="delete">
                <i
                  className="far fa-trash-alt text-right delete"
                  data-id="5fcf169b4c7f130015840131"
                ></i>
              </span>
            </span>
            <p className="statusText pt-2 mr-2" data-id="5fcf169b4c7f130015840131">
              Posted pictures of my recent trip to Kyoto, Japan. Hope you like
              the pics!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
