// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
// import {Route} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
// import About from './components/About';
// import TechStack from './components/TechStack';
// import Main from "./componen/ts/Main";

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
                {/* <Route path="/" components={<About/>}/> */}
                  {/* <About /> */}
                {/* </Route> */}
                {/* <Route path="/TechStack" components={<TechStack/>}/> */}
                  {/* <TechStack /> */}
                {/* </Route> */}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
