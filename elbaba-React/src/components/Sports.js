import React from 'react';
import {Link} from "react-router-dom";
import SportsProducts from '../api/SportsProducts.json';
class Sports extends React.Component{

    state= {
        sportsProducts:SportsProducts
    }
    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
    render(){
        return (
                <div className='Sports-page'>
                    <div className='container'>

                        <div className='Sports-page-title'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                    <p >Sports Equipments</p>
                                </div>
                            </div>
                        </div>

                        <div className='Sports-page-products'>
                            <div className='row'>
                                
                                {this.state.sportsProducts.map(product => (
                                        <div className='col-lg-3 col-md-4  col-sm-6' key={product.id}>
                                        <div className='item'>
                                            <Link to={'/sports/product/' + product.id}>
                                                <img src={process.env.PUBLIC_URL + '/images/products/' + product.image } />
                                                <p>{product.name}</p>
                                                <h4>{product.price + '$'}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    ))}
  
                            </div>
                        </div>
                    </div>
            </div>

            )
    }
    
}


export default (Sports);