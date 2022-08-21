import React from 'react';
// import { BrowserRouter, Switch, Route ,Router,Routes} from "react-router-dom";
import { BrowserRouter as  Router , Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/Form/SignIn/SignIn';

function App() {
  return (
  //   <Router>
  //  <Routes>
  //   <Route exact path = "/signIn" component= {SignIn} />
  //   </Routes>
  //   </Router>

  <Router>
        <Routes>
          <Route exact path="/signIn" element = {<SignIn />}>
              
          </Route>
    </Routes>
  </Router>
    
  );
}

export default App;
