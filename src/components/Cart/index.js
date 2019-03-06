import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css"

class Cart extends Component {

    constructor(props){
        super(props)

        this.style = {
            color:"orange"
        }
        this.priceReducer = (accumulator, currentValue)=>(
            accumulator+currentValue
         )
    }
 
    getCartDetails(){
		if(localStorage.cart){
			let cart = JSON.parse(localStorage.getItem("cart"))
			return cart
		}
       
    }


    totalPrice(){
		if(localStorage.cart){
			const priceInCart  = [...this.getCartDetails().map((data)=>(data.price))]
			return priceInCart.reduce(this.priceReducer)
		}
       
    }

    removeItem(id){
        // const items  = this.getCartDetails()
            // localStorage.setItem("cart", items)
    }
    
    onUpdateQuantity(e){
		console.log(e.target.value)
    }


    render() { 
        
        return ( 
	 	<section className="shopping-cart dark">
         
	 		<div className="container">
		        <div className="block-heading">
		          <h2>Shopping Cart</h2>
                  <h3 style={this.style}>Shopping cart detail page</h3>
		        </div>
		        <div className="content">
	 				<div className="row">
	 					<div className="col-md-12 col-lg-8">
							 <div className="items">
							 {!localStorage.cart? "Your Cart is Empty" : this.getCartDetails().map((data)=>(
                                 
                                 <div key={data.id} className="product">
								 
				 					<div className="row">
					 					<div className="col-md-3">
					 						<img alt="" className="img-fluid mx-auto d-block image" src="./image.jpg" />
					 					</div>
					 					<div className="col-md-8">
					 						<div className="info">
						 						<div className="row">
							 						<div className="col-md-5 product-name">
							 							<div className="product-name">
								 							<a href="##">  {data.title}</a>
								 							<div className="product-info">
									 							<div>Description: <span className="value">{data.description}</span></div>
									 							<div>Price: <span className="value">${data.price}</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div className="col-md-4 quantity">
							 							<label htmlFor="quantity">Quantity:</label>
							 							<input id="quantity" value={data.qantity} type="number" onChange={this.onUpdateQuantity.bind(this)} className="form-control quantity-input" />
							 						</div>
                                                     <div className="col-md-1 quantity">
							 							{/* <label onClick={this.removeItem.bind(this, data.id)}>Remove</label> */}
							 						</div>
							 						<div className="col-md-3 price">
							 							<span></span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
                                 
                               
                                 
                                 ))}
                             
				 				
				 			</div>
			 			</div>
			 			<div className="col-md-12 col-lg-4">
			 				<div className="summary">
			 					<h3>Summary</h3>
			 					<div className="summary-item"><span className="text">Discount</span><span className="price">$0</span></div>
			 					<div className="summary-item"><span className="text">Shipping</span><span className="price">$0</span></div>
			 					<div className="summary-item"><span className="text">Total</span><span className="price">${this.totalPrice()}</span></div>
			 					<button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
				 			</div>
			 			</div>
		 			</div> 
		 		</div>
	 		</div>
		</section>

         );
    }
}
 
const mapStateToProps = ()=>({

})
 
export default connect(mapStateToProps)(Cart);