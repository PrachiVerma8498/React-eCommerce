import React,{ Component } from "react";

export default class GridCalculation extends Component{
    state={
        gridTitle:"Buy Products",
        Products:[
        {
            id: 1,
            name:"abc",
            price: 10,
            quantity:1,
        },
        {
            id: 2,
            name:"def",
            price: 20,
            quantity:2,
        },
        {
            id: 1,
            name:"ghi",
            price: 30,
            quantity:3,
        }
    ]
    }
    render(){
        return <React.Fragment>
            <h4>Buy Products</h4>
            <hr/>
            <table className="table m-3 p-1">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Net Price</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {this.getProductsRow()}
                </tbody>
                <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td className="total">Total:</td>
                        <td className="total">{this.calculateTotalPrice()}</td>
                    </tr>
            </table>
        </React.Fragment>
    };
    getProductsRow=()=>{
        return(
        this.state.Products.map((product)=>{
                
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td >$ {this.calculateNetPrice(product.price,product.quantity)}</td>
            </tr>
        );
    }
        ))
    }
        
    calculateNetPrice=(price,quantity)=>{
        if(price ==0 || quantity==0){
            return 0;
        }else{
            return price*quantity;
        }
    }
    calculateTotalPrice=()=>{
        console.log("inside price")
       var sum=0;
       sum= this.state.Products.map((product)=>{
        return(
            sum=sum+(product.price*product.quantity)
        );
       })
       return sum;
        // return (
        //     this.state.Products.map((product)=>{
        //         return(
        //         sum+=(product.price*product.quantity)
        //         );
                
        //     })
        // )
    }
    calculateTotalAmount(){
        console.log("inside total")
        var sum=0;
        var product;
         for(var i=0;i<this.state.Products.length;i++){
            product=this.state.Products[i];
            sum+=(product.price*product.quantity);

         }
         return sum;
     }
}