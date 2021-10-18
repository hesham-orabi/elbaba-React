import React from 'react';
import {Link} from "react-router-dom";
import ToysProducts from '../api/ToysProducts.json';
class Toys extends React.Component{

    state= {
        toysProducts:ToysProducts
    }
    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
    render(){
        return (
                <div className='toys-page'>
                    <div className='container'>

                        <div className='toys-page-title'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                    <p >Toys</p>
                                </div>
                            </div>
                        </div>

                        <div className='toys-page-products'>
                            <div className='row'>
                                    
                                {this.state.toysProducts.map(product => (
                                        <div className='col-lg-3 col-md-4  col-sm-6' key={product.id}>
                                        <div className='item'>
                                            <Link to={'/toys/product/' + product.id}>
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

export default (Toys);