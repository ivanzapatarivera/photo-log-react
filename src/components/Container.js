import "../style.css";
import PhotoLogs from "./Container/PhotoLogs";
import Profile from "./Container/ProfilePicture";
// import Timeline from "./Container/Timeline"

function Container() {
  return (
    <div className="container mainContainer">
      <Profile />
    </div>
  );
}

export default Container;
