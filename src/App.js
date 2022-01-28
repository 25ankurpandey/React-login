import React from 'react';  
import './App.css';  
import Login1 from "./Login1";  
import Regster from "./Register";  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Dashboard from "./Dashboard";  
function App() {  
  return (  
    <Router>      
      <div className="container">      
        <nav className="navbar navbar-expand-lg navheader">      
          <div className="collapse navbar-collapse" >      
            <ul className="navbar-nav mr-auto">      
              <li className="nav-item">      
                <Link to={'/login'} className="nav-link">login</Link>      
              </li>    
              <li className="nav-item">      
                <Link to={'/Regster'} className="nav-link">Regster</Link>      
              </li>    
            </ul>      
          </div>      
        </nav> <br />      
        <Switch>        
          <Route path='/login' component={Login1} />     
          <Route path='/Regster' component={Regster} />    
          <Route path='/Dashboard' component={Dashboard} />  
        </Switch>      
      </div>      
    </Router>     
  );  
}  
  
export default App;  