import { render } from "@testing-library/react";
import "../style.css";
function FooterMobile() {
  return (
    <footer
      id="footer"
      className="text-center fixed-bottom footer footerMobileView py-4"
    >
      <a href="/" className="footer">
        <i className="far fa-user-circle"></i> Profile
      </a>
      <span id="imagesMobile" className="footer px-5">
        <i className="far fa-images"></i>{'\u00A0'}Log{" "}
      </span>
      <span id="locationsLoggedMobile">
        <i className="fas fa-map-marker-alt"></i> Albums{" "}
      </span>
    </footer>
  );
}
export default FooterMobile;
