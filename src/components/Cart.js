import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
class Cart extends React.Component {

    DeleteFromCart =(index)=>{
        this.props.DeleteFromCart(index);
    }
    render(){

        if(this.props.cartItems != ''){
            return (
            
                <div className='cart-page'>
                    <div className='container'>
                        <div className='cart-page-title'>
                                <div className='row'>
                                    <div className='col-12 text-left'>
                                        <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                                        <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                        <p >Cart</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                {this.props.cartItems.map( (item, index) =>
    
                                    <div className='col-md-4' key={item.product.id}>
                                        <div className="card">
                                            <img src={process.env.PUBLIC_URL + '/images/products/' + item.product.image } className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.product.name}</h5>
                                                <p>Quantity:  <span>{item.quantity} Item</span></p>
                                                <p>Price:  <span>{item.product.price}$</span></p>
                                                <p>Total:  <span>{item.quantity * item.product.price}$</span></p>
                                                <button className="btn btn-danger" onClick={() =>this.DeleteFromCart(index)}><i className="fa fa-trash" ></i> Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
    
                            </div>
                            <div className='total-cart'>
                                <p className='total-cart'><span> Items Total Price: </span> {this.props.total + '$' + ' + Shipping Price'}</p>
                                <button class='pay' className='btn' data-toggle="modal" data-target="#modal">Pay</button>
                            </div>
                        
    
                        <div className="modal fade" id="modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
    
                                    <div className="modal-header">
                                    <h5 className="modal-title">Choose Payment Method</h5>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
    
                                    <div class="modal-body">
                                        <form>
                                            <input type="radio" />
                                            <label >Cash</label><br/>
                                            <p>Handing over the money to the representative upon delivery of the order</p>

                                            <input type="radio"/>
                                            <label>Master Card</label><br/>
                                            <p> Payment With Visa Card </p>

                                        </form>
                                    </div>
    
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-danger " data-dismiss="modal">Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
                
    
            )
        }else{
            return (
            
                <div className='empty-cart'>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <p>Cart Is Empty !</p>
                            <Link to='/'>Go To Shopping</Link>
                        </div>
                    </div>
                  
                </div>
        )}
        
    }


}



const mapStateToProps= (state)=>{
    return {
        cartItems:state.cart,
        total:state.cart.reduce((total,item) => total + item.product.price * item.quantity , 0)
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        DeleteFromCart: (index) => dispatch({type: 'Delete_From_Cart', index})
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Cart);