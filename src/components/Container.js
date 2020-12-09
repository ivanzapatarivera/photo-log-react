import "../style.css";
import PhotoLogs from "./Container/PhotoLogs";
import ProfilePicture from "./Container/ProfilePicture";

function Container() {
  return (
    <div className="container mainContainer">
      <div className="row">
        <ProfilePicture />
        <PhotoLogs />
      </div>
    </div>
  );
}

export default Container;
