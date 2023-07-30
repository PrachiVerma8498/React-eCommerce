import { Component } from "react";
import React from "react";
import  { NavBar } from "./NavBar";

import Login from "./login";
import{ Route } from "react-router";
import { Routes } from "react-router-dom";
import { Router,BrowserRouter,HashRouter} from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import NoMatchPage from "./NoMatchPage";
 
 import SideBar from "./sideBar";
import ProductById from "./ProductById";
//import { createBrowserHistory } from "history";
import history from "./history";
export default class App extends Component{
    
    constructor(props){
super(props);
this.state={isLoggedIn:false};

    }
    
render(){
    
    return(
        //<HashRouter history={history}>
        <HashRouter history={history}>
        <NavBar isLoggedIn={this.state.isLoggedIn} updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    {this.state.isLoggedIn?(<SideBar/>):""}
                    
                    </div>
                <div className="col-lg-9"><Routes>
        {/* <Route path="/" exact  Component={Login}/>  */}
         {/*//supply the isLoggedIn staus to login.jsx*/}
        {/* <Route path="/"  exact render={(props)=>(
            <Login {...props} updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>
    )}
        /> */}
        
      
        <Route path="/" element={ <Login updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>} />
        <Route path="/dashboard" exact Component={Dashboard}/>
        <Route path="/customers" exact Component={CustomersList}/>
        <Route path="/cart" exact Component={ShoppingCart}/>
        <Route path="/product/:id"  Component={ProductById}/>
        <Route path="*" exact Component={NoMatchPage}/>
        {/* <Route path="product/ : id" exact Component={ProductById}/> */}

        
        </Routes></div>
                
            </div>
        </div>
        </HashRouter>
    )
}
updateIsLoggedInStatus=(status)=>{
    this.setState({
        isLoggedIn:status
    })
    console.log("app:" ,this.state.isLoggedIn)
}
componentDidMount(){
    
    
}
}