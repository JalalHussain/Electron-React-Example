import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import {Switch, Route} from 'react-router-dom';
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import NotFound from "./components/pages/NotFound";
import APICallData from "./components/pages/APICallData";
import Hooks from "./components/pages/Hooks";

const {app} = window.require('electron').remote;

class App extends Component{
    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/APICallData" component={APICallData}/>
                    <Route path="/Hooks" component={Hooks}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
