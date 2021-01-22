import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import LogPhoto from "./components/LogPhoto/LogPhoto";

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path="/" component={Container} />
          <Route exact path="/UpdateProfilePicture" component={UpdateProfilePicture} />
          <Route exact path="/LogPhoto" component={LogPhoto} />
        <Footer />
      </div>
    </Router>
  );

}

export default App;
