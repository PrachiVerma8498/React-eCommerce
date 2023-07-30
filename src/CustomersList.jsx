import React,{ Component } from "react";

export default class CustomersList extends Component{
    
    state={pageTitle:"Customers",
            customersCount: 50,
            customerList:[
                {
                     id: "1", 
                     custName: "James", 
                     contact: "123-456", 
                     address: { city: "New Delhi", country: "India" }, 
                     photo:"https://picsum.photos/id/1060/60"
                },
                { 
                    id: "2", 
                    custName: "Scott", 
                    contact: "167-834", 
                    address: { city: "Delhi", country: null } , 
                    photo:"https://picsum.photos/id/1070/60"
                },
                { 
                    id: "3",
                    custName: "Allen", 
                    contact: "178-836", 
                    address: { city: "", country: "India" }, 
                    photo:"https://picsum.photos/id/1080/60" 
                },
                { 
                    id: "4", 
                    custName: "Schito", 
                    contact: "", 
                    address: { city: null, country: "" }, 
                    photo:"https://picsum.photos/id/1020/60" 
                },
                { 
                    id: "5", 
                    custName: "Elina", 
                    contact: null, 
                    address: { city: "Shimla", country: "India" }, 
                    photo:"https://picsum.photos/id/1040/60"
                },
                { 
                    id: "6", 
                    custName: "Quaff", 
                    contact: "563-876", 
                    address: { city: "Manali", country: "India" }, 
                    photo:"https://picsum.photos/id/1050/60" 
                },
            ]
        };

    customerNameStyle=(custName)=>{
        if(custName.startsWith("A")) return {backgroundColor:"cyan"};
        else if(custName.startsWith("S")) return {backgroundColor:"#967BB6"};
        else return {};

    }
    customerNameStyleCSS=(custName)=>{
        if(custName.startsWith("A")) return "cyan-highlighted border-left";
        else if(custName.startsWith("S")) return "lavender-highlighted border-right";
        else return "default-highlighted";

    }     
          
    render(){
        return <div>{this.state.pageTitle}
            <span className="badge badge-secondary m-2 text-secondary bg-light">{this.state.customersCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                <table className="table m-3 p-1">
                <thead>
                        <tr>
                        <th>#</th>
                        <th>photo</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Country</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
    }
    onRefreshClick=()=>{
        console.log("onclick refresh method click "+this.state.customersCount);
        this.setState({
            customersCount:50
        });

    } 
    getCityToRender(cust1){
         
        return    cust1.address.city?cust1.address.city:
            <div className="bg-warning p-1 m-1 text-center">No City</div>
        }
    
    /*getCountryToRender(country){
        if(country){
            return country;
        }
        else{
            return <div className="alert alert-info p-1 m-1 text-center">No Country</div>
        }
    }*/

    //using arrow/lambda function
    getCountryToRender=(country)=>{
        if(country){
            return country;
        }
        else{
            return <div className="alert alert-info p-1 m-1 text-center">No Country</div>
        }
    }

    getCustomerRow=()=>{
       return ( 
            this.state.customerList.map((cust1,index)=>{
                return (
                    <tr key={cust1.id}>
                    <td>{cust1.id}</td>
                    <td>
                        <img src={cust1.photo} alt="customer+{cust1.id}"/>
                        <div><button className="btn btn-sm btn-secondary" onClick={()=>this.onClickPictureChange(cust1,index)}>Change Picture</button></div>
                    </td>

                    <td className={this.customerNameStyleCSS(cust1.custName)}>
                        {cust1.custName}
                    </td>
                    <td>{(cust1.contact===null || cust1.contact==="")?<div>No phone</div>:cust1.contact}</td>
                    <td>{this.getCityToRender(cust1)}</td>
                    <td>{this.getCountryToRender(cust1.address.country)}</td>
                </tr>
                );
            })
        );
    }
    
    onClickPictureChange=(cust,index)=>{
    //   console.log(cust);
    //   console.log(index);  
    //get existing object
      var custArr=this.state.customerList;
      var i=1000;
      custArr[index].photo="https://picsum.photos/id/"+i+"/60";
      i+=10;
      this.setState({
        //customerList:[  ] since the relative component loads on reques, hence value update is needed
        customerList: custArr
      });
      
    };
    componentDidMount(){
        document.title="Customers - eCommerce "
       } 
}