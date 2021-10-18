import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';


 function CartIcon(props){
    return <div className='cart-icon'>

            <Link to='/cart'>
                <i className="fal fa-shopping-cart"></i>
                {props.totalQuantity > 0 ? <span>{props.totalQuantity}</span> : ''}
                 
                </Link>

        </div>
}
const mapStateToProps= (state)=>{
    return{
        totalQuantity:state.cart.reduce((total,item) => total + item.quantity , 0)
    }
}
export default connect(mapStateToProps) (CartIcon);