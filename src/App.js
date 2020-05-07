import React from 'react';
import logo from './logo.svg';
import {HashRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import LeftScreen from './compontent/LeftScreen';
import LoginScreen from './pages/login';
import GeneralInfo from './pages/GeneralInfo';

function App() {
    return (
      <HashRouter>
        
        
          <Switch>
              <div className="App">
                <header className="App-header">
                </header>
                <LeftScreen/>
                <div className="container">
                    <Route path="/userinfo" component={GeneralInfo} />   
                    <Route path="/login" component={LoginScreen} />   
                </div>
              </div>

          </Switch>
      </HashRouter>
    );
}

export default App;
