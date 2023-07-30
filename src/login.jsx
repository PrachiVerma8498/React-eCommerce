import React, { Component } from "react";



export default class Login extends Component {
    constructor() {
        super();
        this.state = { email: "scott@test.com", password: "scott123", message:"" }
    }

    render() {
        return <div className="col-lg-9">
            <h4 className="m-1 p-2 border-bottom">Login Form</h4>
            {/* email starts */}
            <div className="form-group form-row">
                <label className="col-lg-4">Email:</label>
                <input type="Email"
                    className="form-control"
                    value={this.state.email}
                    onChange={(event) => {
                        this.setState({
                            email: event.target.value
                        });
                        
                    }} />
            </div>
            {/* email ends */}

            {/* password starts */}
            <div className="form-group form-row">
                <label className="col-lg-4">Password:</label>
                <input type="password" 
                className="form-control" 
                value={this.state.password}
                onChange={(event) => {
                    this.setState({
                        password: event.target.value
                    });
                }}
                 />
            </div>
            {/* password ends */}
            
            {/* login button */}
            <div className="text-right">
            {this.state.message}
            <button className="btn btn-primary m-1 " onClick={this.onLoginCheckJSON}>Login</button>
            </div>
               
        </div>
    }//render ends
    onLoginClick=()=>{
        console.log(this.state)
        if(this.state.email==="admin@abc.com" && this.state.password==="admin123"){
            //success
            console.log("if block")
            this.setState({
                message:<span className="text-success">Successfully logged in</span>
            });
        }
        else{
            //error
            console.log("else block")
            this.setState({
                message: <span className="text-danger">Invalid login, Please try again</span>
            });
            
        }
    }
    onLoginCheckJSON=async ()=>{
        
        var url=`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`;
        
        var response= await fetch(url,{method:"GET"});
        
        var body= await response.json();
        console.log("length",body.length,"body",body)
        if(body.length>0){
            //success
            console.log("if block")
            this.setState({
                message:<span className="text-success">Successfully logged in</span>
            });
            this.props.updateIsLoggedInStatus(true);
            console.log("login props",this.props)
            document.location.hash="/dashboard";
            //this.props.history.replace("/dashboard");
           //this.props.history.replace("/dashboard")
           //this.redirect();
            
        }
        else{
            //error
            console.log("else block")
            this.setState({
                message: <span className="text-danger">Invalid login, Please try again</span>
            });
            
        }
 }
   componentDidMount(){
    document.title="Login - eCommerce "
   } 
  
}