import React,{Component} from "react";
import { Link } from "react-router-dom";


export default class ProductById extends Component{
    constructor(props){
        super(props);
        this.state={
            products:{},
            
        }
    }
   

    render(){
        return <div>
            <h4>Product By Id</h4>
            <div className="row"> 
            <div className="col-lg-6" >
                <div className="card m-2 ">
                    <div className="card-body">
                        <div className="text-muted">Product # {this.state.products.id}
                        <span className="pull-right hand-icon" onClick={()=>this.props.onDelete(this.state.prod)}>
                            <i className="fa fa-times" ></i>
                        </span>
                        </div>

                        
                        <h5 className="pt-5 border-top">{this.state.products.Name}</h5>
                        <h6>${this.state.products.price}</h6>
                    </div>
                    <div className="card-footer ">
                        <div className="float-left">
                            <span className="badge bg-secondary"></span>
                          <div className="btn-group">
                            <button className="btn btn-outline-success" onClick={()=>
                                {this.props.decrement(this.state.prod,this.state.min)}}>-</button>

                            <button className="btn btn-outline-success"  onClick={()=>
                                {this.props.increment(this.state.prod,this.state.max)}}>+</button>
                            </div>  
                        </div>
                        <div className="float-right">
                            <Link to="/cart" className="btn btn-secondary">Back...</Link>
                            {this.props.children}
                            
                            </div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
       

    }
    componentDidMount=async()=>{
       var id=1;//this.props.match.params.id;
       var response=
        await fetch(`http://localhost:5000/Products/${id}`,{method:"GET"});
       
       var body=await response.json();
       console.log("body product by id:",body)
        if(body){
            this.setState({
                products:body
            })
        }

    }
}