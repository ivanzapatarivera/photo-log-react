import "../style.css";
import ProfilePicture from "./Container/ProfilePicture";

function Container() {
  return (
    <div className="container mainContainer">
      <div className="row">
        <ProfilePicture />
      </div>
    </div>
  );
}

export default Container;
