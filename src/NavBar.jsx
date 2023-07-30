import { event } from "jquery";
import { Component } from "react";
import React from "react";
import history from "./history";

import { NavLink } from "react-router-dom";


export class NavBar extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">eCommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                        !this.props.isLoggedIn?(<li className="nav-item">
                               <NavLink className="nav-link active"to="/" activeclassname="active" exact="true">Login</NavLink>
                             </li>):""}
                             {
                        this.props.isLoggedIn? (<li className="nav-item">
                                <NavLink className="nav-link active"to="/dashboard" activeclassname="active">DashBoard</NavLink>
                                </li> ):""} 
                                {
                        this.props.isLoggedIn? (   
                             <li className="nav-item">
                                <NavLink className="nav-link active"to="/customers" activeclassname="active">Customers</NavLink>
                                </li>  ):""}
                                {
                        this.props.isLoggedIn? ( 
                             <li className="nav-item">
                                <NavLink className="nav-link active"to="/cart" activeclassname="selected" >Shopping Cart</NavLink>   
                            </li>):""}
                            
                            {
                        this.props.isLoggedIn? ( 
                             <li className="nav-item">
                                 <NavLink className="nav-link active"to="/" activeclassname="selected"  onClick={this.onLogoutClick} >Logout</NavLink>
                                
                            </li>):""}
                            
                           
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    }
    onLogoutClick=(event)=>{
        //this method stops page refresh when user click logout link
        event.preventDefault();
        this.props.updateIsLoggedInStatus(false); 
        //navigate to login component
        history.replace("/");
        document.location.hash="/";
    };
}
