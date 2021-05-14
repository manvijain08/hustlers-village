import React from "react";
import './App.css';
import Hero from "./Pages/Herosection/Hero";
import Ddr from "./Pages/Ddr/Ddr";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
         <Navbar />
         <Switch>
           <Route path="/" exact component={Hero} />
           <Route path="/Login" exact component={Login} />
           <Route path="/Register" exact component={Register} />
           <Route path="/Ddr" exact component={Ddr} />
         </Switch>
         {/* <Login />
         <Register />
         <Ddr /> */}
     </Router>    
  );
}

export default App;
