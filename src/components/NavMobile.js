import "../style.css";
import logo from '../images/logo-nav.png';
function NavMobile() {
  return (
    <nav className="text-center navbar navbar-expand-lg navbar-dark fixed-top topNavBarMobileView">
      <a href="/">
        <img src={logo} />
      </a>
    </nav>
  );
}

export default NavMobile;