import "../style.css";
import Profile from "./Container/ProfilePicture";
import StatusUpdate from "./Container/StatusUpdate";
import PhotoLogs from "./Container/PhotoLogs";
import PictureDiv from "./Container/PictureDiv.js";
import Timeline from "./Container/Timeline";

function Container() {
  return (
    <div className="container mainContainer">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <Profile />
          <StatusUpdate />
          <PhotoLogs />
          <PictureDiv />
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Container;
