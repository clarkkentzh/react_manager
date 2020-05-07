import React from 'react';
import logo from './logo.svg';
import {HashRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import LeftScreen from './compontent/LeftScreen';
import HeaderScreen from './compontent/HeaderScreen';
import LoginScreen from './pages/Login';
import GeneralInfo from './pages/GeneralInfo';
import BusinessAppointment from './pages/BusinessAppointment';
import SpeechScreen from './pages/SpeechScreen';
import IntelligentLearn from './pages/IntelligentLearn';

function App() {
    return (
      <HashRouter>
          <div className="App">
            <HeaderScreen/>
            
            <LeftScreen/>
          
            <Switch>
                <div className="container">
                    <Route path="/userinfo" component={GeneralInfo} />   
                    <Route path="/login" component={LoginScreen} />   
                    <Route path="/business" component={BusinessAppointment} />   
                    <Route path="/speech" component={SpeechScreen} />   
                    <Route path="/intelligent" component={IntelligentLearn} />   
                </div>
            </Switch>
          </div>
      </HashRouter>
    );
}

export default App;
