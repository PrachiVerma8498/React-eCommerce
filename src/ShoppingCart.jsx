import React, { Component } from "react";
import Product from "./Product";


export default class ShoppingCart extends Component {

    //at the time of mounting the object
    constructor(){
        console.log("constuctor- cart")
super()//super class constructor
//similarly parameterized constructor can be called  if any props are provided from parent/invoking component

        this.state = {
            Products: []
        }
    }
    

    render() {
        console.log("render- cart")
        return <React.Fragment>
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {
                        this.state.Products.map((prod) => {
                            return (
                                // <Product key={prod.id}
                                //     id={prod.id}
                                //     name={prod.Name}
                                //     price={prod.price}
                                //     quantity={prod.quantity} />
                                <Product key ={prod.id} product={prod} 
                                increment={this.handleIncrement} 
                                decrement={this.handleDecrement}
                                onDelete={this.handleDelete}>
                                {/* //passing the  html tags as child */}
                                <button className="btn btn-primary">Buy Now</button>
                                </Product>
                            );

                        })
                    }
                </div>
            </div>
        </React.Fragment>
    }

    handleIncrement=(product,max)=>{
        console.log("increment");

         var allproducts=[...this.state.Products];
         //get the index of selected item
         var index=allproducts.indexOf(product);
         var quantity=allproducts[index].quantity;

         if(quantity<max){
            allproducts[index].quantity++;

             //update the state of current component(parent)
            this.setState({
                Products:allproducts
             })
         }
         
        
         
    }
    handleDecrement=(product,min)=>{
        console.log("decrement");
        
        
         var allproducts=[...this.state.Products];
         //get the index of selected item
         var index=allproducts.indexOf(product);
         var quantity=allproducts[index].quantity;

         if(quantity>min){
            allproducts[index].quantity--;
            //update the state of current component(parent)
         this.setState({
            Products:allproducts
        })
        }
    }
    //executes when user clicks delete button
    handleDelete=(product)=>{
        var allproducts=[...this.state.Products];
         //get the index of selected item
         var index=allproducts.indexOf(product);

         //take the confirmation from user
         if(window.confirm("Are you sure to delete")){
             //delete the product from the list
                     allproducts.splice(index,1);

          //update the state of current component(parent)
         this.setState({
            Products:allproducts
        })
         }
               }    
               componentDidMount(){
                document.title="Products - eCommerce "
               } 
    //    componentDidMount(){
    //     //fetch data from data source
    //     console.log("mount- cart");
    //     var promise=fetch("http://localhost:5000/Products", {method:"GET"});
    //     promise.then((response)=>{
    //         console.log(response);

    //         var promise2=response.json();
    //         promise2.then((prod)=>{
    //             console.log(prod);
    //             this.setState({
    //                 Products:prod
    //             })
    //         });
    //     } );
        
    //    }
               
    // componentDidMount= async()=>{
    //     var promise=fetch("http://localhost:5000/Products", {method:"GET"});
    //     var response=promise;
    //     console.log("async",response);
    // }
    componentDidMount= async()=>{
        var response= await fetch("http://localhost:5000/Products", {method:"GET"});
        console.log("async in one line",response);
        var  prods =  await response.json();
        console.log("async in one line",prods);
        this.setState({
            Products: prods
        })
       
    }
       componentDidUpdate(prevProps,prevState)
       {

        //conditionally call http request
        console.log("update- cart",prevProps,prevState,this.props,this.state)
       }
       componentWillUnmount(){
        console.log("unmount- cart")
       }
}