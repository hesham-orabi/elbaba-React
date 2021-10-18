import React from 'react';
import {Link} from "react-router-dom";
import WatchesProducts from '../api/WatchesProducts.json';
class Watches extends React.Component{

    state= {
        watchesProducts: WatchesProducts
    }
    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
    render(){
        return (
                <div className='watches-page'>
                    <div className='container'>

                        <div className='watches-page-title'>
                            <div className='row'>
                                <div className='col-12 text-left'>
                                    <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                                    <i className="fas fa-play"></i>&nbsp;&nbsp;&nbsp;
                                    <p >Watches</p>
                                </div>
                            </div>
                        </div>

                        <div className='watches-page-products'>
                            <div className='row'>

                                {this.state.watchesProducts.map(product => (
                                        <div className='col-lg-3 col-md-4  col-sm-6' key={product.id}>
                                        <div className='item'>
                                            <Link to={'/watches/product/' + product.id}>
                                                <img src={process.env.PUBLIC_URL + '/images/products/' + product.image } />
                                                <p>{product.name}</p>
                                                <h4>{product.price + '$'} </h4>
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

export default (Watches);