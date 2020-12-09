import "../style.css";
import logo from "../images/logo-nav.png";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm navbarDesktop">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo-nav" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mt-4">
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i className="far fa-user-circle"></i> Profile{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item" onClick={logNewPhoto}>
              <a className="nav-link" id="logNewPhoto">
                <i className="fas fa-camera"></i> Log a Photo
              </a>
            </li>

            <li className="nav-item nav-link">
              <div className="dropdown" id="locationsLoggedNavbarBtn">
                <div
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-map-marker-alt"></i> Albums
                </div>
                <div
                  className="dropdown-menu shadow fade-in locationsLoggedDropdownMenu"
                  aria-labelledby="dropdownMenuButton"
                  id="locationsLoggedDropdownMenu"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  function logNewPhoto() {
    const logNewPhotoFrame = document.querySelector("#logNewPhotoFrame");
    if (logNewPhotoFrame.style.display === "flex") {
      logNewPhotoFrame.style.display = "none";
      logNewPhotoFrame.classList.remove("fade-in");
    } else {
      logNewPhotoFrame.style.display = "flex";
      logNewPhotoFrame.classList.add("fade-in");
    }
  }
}

export default Nav;
