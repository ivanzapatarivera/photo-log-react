import "../style.css";
function Footer() {
  return (
    <footer
      id="footerDesktop"
      className="text-center fixed-bottom footer footerDesktopView py-3"
    >
      <span className="text-center footerDesktop">
      {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A9'} Copyright 2020 PhotoLog App
      </span>
    </footer>
  );
}
export default Footer;
