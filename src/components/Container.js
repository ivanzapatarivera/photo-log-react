import "../style.css";
import PhotoLogs from "./Container/PhotoLogs";
import ProfilePicture from "./Container/ProfilePicture";
import Timeline from "./Container/Timeline"

function Container() {
  return (
    <div className="container mainContainer">
      <div className="row">
        <ProfilePicture />
        <PhotoLogs />
        <Timeline />
      </div>
    </div>
  );
}

export default Container;
