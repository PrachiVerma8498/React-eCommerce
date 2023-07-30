import React,{Component} from "react";
import { Link } from "react-router-dom";
export default class Product extends Component{
    state={
        prod:this.props.product,
        max:10,
        min:0
        
    }
    componentWillUnmount(){
        console.log("unmount- product")
       }

    render(){
        
        return <div className="col-lg-6" >
                <div className="card m-2 ">
                    <div className="card-body">
                        <div className="text-muted">Product # {this.state.prod.id} 
                        <span className="pull-right hand-icon" onClick={()=>this.props.onDelete(this.state.prod)}>
                            <i className="fa fa-times" ></i>
                        </span>
                        </div>

                        
                        <h5 className="pt-5 border-top">{this.props.product.Name}</h5>
                        <h6>${this.props.product.price}</h6>
                    </div>
                    <div className="card-footer ">
                        <div className="float-left">
                            <span className="badge bg-secondary">{this.state.prod.quantity}</span>
                          <div className="btn-group">
                            <button className="btn btn-outline-success" onClick={()=>
                                {this.props.decrement(this.state.prod,this.state.min)}}>-</button>

                            <button className="btn btn-outline-success"  onClick={()=>
                                {this.props.increment(this.state.prod,this.state.max)}}>+</button>
                            </div>  
                        </div>
                        <div className="float-right">
                            {this.props.children}
                            <Link to ={`/product/${this.state.prod.id}`} className="mr-2">Details</Link>
                            </div>
                        
                    </div>
                </div>
            </div>
    }
}