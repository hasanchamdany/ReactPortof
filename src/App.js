// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Navbar from "./components/Navbar"
import About from './components/About'
import TechStack from './components/TechStack'
// import Main from "./components/Main"

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
                <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar/>
              {/* <Main/> */}
              {/* <Route exact path="/">
                <About />
              </Route>
              <Route path="/TechStack">
                <TechStack />
              </Route> */}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
