import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

// Webpage Components
// import Body from "./components/Body";
// import Container from "./components/Container"
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import Container from './components/Container'
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <NavMobile />
    <Container />
    <Footer />
    <FooterMobile />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
