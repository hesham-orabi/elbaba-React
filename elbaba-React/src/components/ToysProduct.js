import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import ToysProducts from '../api/ToysProducts.json';

class ToysProduct extends React.Component {

    state= {
        allProducts: ToysProducts,
        product:{},
        quantity: 1
    }

    componentDidMount = ()=>{
        window.scrollTo(0,0);
        
        let id= this.props.match.params.id;
        let product=this.state.allProducts.find(item => item.id == id);
        this.setState({product:product})
    }

    subQuantities =()=>{
        this.setState({quantity:this.state.quantity -1})
    }
    addQuantities =()=>{
        this.setState({quantity:this.state.quantity +1})
    }

    AddToCart = (e)=>{
        this.props.AddToCart(this.state.product, this.state.quantity);
        e.target.innerText="Added To Cart";
    }
    render(){

        if(this.state.quantity < 1){
            this.setState({quantity: 1})
        }

        let myProduct =this.state.product;
        return (
            <div className='product-page'>
                <div className='container'>

                    <div className='product-page-title'>
                        <div className='row'>
                            <div className='col-12 text-left'>
                                <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                                <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                <Link to='/mobile-accessories'>Mobile Phone And Accessories</Link>&nbsp;&nbsp;&nbsp;
                                <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                <p>{myProduct.name}</p>
                            </div>
                        </div>
                    </div>

                    <div className='product-page-details'>
                        <div className='row'>

                            <div className='col-md-6 col-xs-12'>
                                <img src={process.env.PUBLIC_URL + '/images/products/' + myProduct.image }/>
                            </div>

                            <div className='col-md-6 col-xs-12 text-left info'>
                                <p>Name: &nbsp; <span> {myProduct.name}</span></p>
                                <p>Price:  &nbsp;<span> {myProduct.price + '$'}</span></p>
                                <p>Color:  &nbsp;<span> {myProduct.color}</span></p>

                                <div className='row ' id='cart'>
                                    <div className='col-md-4'>
                                        <div className='min-max-input'>
                                            <button id='sub' onClick={this.subQuantities}>-</button>
                                            <input  value={this.state.quantity}  />
                                            <button id='add' onClick={this.addQuantities}>+</button>
                                        </div>
                                    </div>
                                    <div className='col-md-8 text-center'>
                                        <Link to='' id='wishlist'><i className="fal fa-heart"></i> ADD TO WISHILIST</Link>
                                    </div>
                                    <div className='col-md-12'>
                                        <button className='btn-cart' onClick={(e) => this.AddToCart(e) }><i className="fal fa-shopping-cart"></i> Add To Cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
        </div>

        )
    }


}

const mapDispatchToProps= (dispatch)=>{
    return{
        AddToCart: (productInfo,quantity) => {dispatch({type:'ADD_TO_CART',productInfo,quantity})}
    }
}
export default connect(null,mapDispatchToProps) (ToysProduct);







