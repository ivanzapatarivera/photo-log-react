import "../style.css";
function Body() {
  return (
    <div className="row">
      {/* <!-- Column with profile content --> */}
      <div className="col-12 col-md-8 mx-auto">
        {/* <!-- This is the first row with profile picture and form to update Timeline --> */}
        <div className="row mt-5 text-center">
          {/* <!-- Profile picture column --> */}
          <div className="col-12 mb-3 mx-auto">
            {/* <!-- Profile Picture --> */}
            <div id="show" className="col-12 col-md-3 mb-3 mx-auto">
              <div id="profilepic"></div>
            </div>

            {/* <!-- Profile picture update form --> */}
            <div
              id="newProfilePic"
              className="col-12 col-md-6 mb-3 mx-auto newProfilePic"
            ></div>
          </div>

          <div className="col-12 mx-auto">
            <button className="px-4 py-1 postStatusBtn" id="postStatusBtn">
              <i className="fas fa-feather-alt"></i>
            </button>
          </div>

          {/* <!-- PhotoLog Status update column with entry form  --> */}
          <div className="status statusText text-center" id="statusBox"></div>
        </div>

        {/* <!-- Picture Collage --> */}
        <div className="row picturesWall mx-auto" id="picturesCollage">
          <div className="col-12">
            <h4 className="text-center pt-3" id="picturesCollageHeading">
              Recent PhotoLogs
            </h4>
            <div className="row p-3 mainCollageDIV" id="collageDivs">
              
            </div>
          </div>
        </div>

        {/* <!-- Full Screen Div --> */}
        <div className="row">
          <div
            className="col-12 col-md-12 mx-auto text-center fullScreenDiv"
            id="pictureDiv"
          ></div>
        </div>

        {/* <!-- Section with previous statuses --> */}
        <div className="row">
          <div className="col-12 my-4">
            <h3 className="text-center timeline">Timeline</h3>
            <div className="mx-auto px-2" id="previousStatus"></div>
          </div>
        </div>
      </div>

      {/* <!-- Column with links of places traveled --> */}
      <div className="row">
        <div className="col-12 my-4">
          <h4 className="text-center placesTraveled" id="places">
            Albums by Location
          </h4>
        </div>
      </div>
    </div>
  );


}

export default Body;
