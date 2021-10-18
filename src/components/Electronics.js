import React from 'react';
import {Link} from "react-router-dom";
import ElectronicsProducts from '../api/ElectronicsProducts.json';
class Electronics extends React.Component{

    state= {
        electronicsProducts:ElectronicsProducts
    }
    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
    render(){
        return (
                <div className='electronics-page'>
                    <div className='container'>

                        <div className='electronics-page-title'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                    <p>Electronics</p>
                                </div>
                            </div>
                        </div>

                        <div className='electronics-page-products'>
                            <div className='row'>
                                
                                {this.state.electronicsProducts.map(product => (
                                    <div className='col-lg-3 col-md-4  col-sm-6' key={product.id}>
                                        <div className='item'>
                                            <Link to={'/electronics/product/' + product.id}>
                                                <img src={process.env.PUBLIC_URL + '/images/products/' + product.image } />
                                                <p>{product.name}</p>
                                                <h4>{product.price + '$'}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
            </div>

            )
    }
    
}


export default (Electronics);