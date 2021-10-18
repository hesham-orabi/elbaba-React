import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <>
                <div className='main-footer'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-3 categories'>
                                <h5>Categories</h5>
                                <Link to='/mobile-accessories'>Accessories</Link> <br/>
                                <Link to='/watches'>Watches</Link> <br/>
                                <Link to='/perfumes'>Perfumes</Link> <br/>
                                <Link to='/toys'>Toys</Link> <br/>
                                <Link to='/electronics'>Electronics</Link> <br/>
                            </div>

                            <div className='col-md-3 support'>
                                <h5>Support</h5>
                                <Link to='/about-us'>About Us</Link> <br/>
                                <Link to='/policy-of-returns'>Policy of returns</Link> <br/>
                                <Link to='/installment'>Installment</Link> <br/>
                                <Link to='/shipping-and-delivery'>Shipping and delivery</Link> <br/>
                                <Link to='/popular-questions'>Popular Questions</Link> <br/>
                            </div>

                            <div className='col-md-3 about'>
                                <h5>Buying on El Baba</h5>
                                <Link to='/how-it-work'>How It Works</Link> <br/>
                                <Link to=''>Buying Policies</Link> <br/>
                                <Link to=''>Buying Terms and Conditions</Link> <br/>
                            </div>

                            <div className='col-md-3 follow '>
                                <h5>Follow Us</h5>
                                <p>You Can Follow Us On Our Social media accounts</p>
                                <ul>
                                    <li>
                                        <a href=''><i className="fab fa-facebook-f" ></i></a>
                                    </li>
                                    <li>
                                        <a href=''><i className="fab fa-twitter" ></i></a>
                                    </li>
                                    <li>
                                        <a href=''><i className="fab fa-whatsapp"></i></a>
                                    </li>
                                    <li>
                                        <a href=''><i className="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className='copyright-footer'>

                    <div className='container'>
                        <div className='row '>
                            <div className='col-md-6 text-left'>
                                <p> Copyright © El Baba INC 2021</p>
                            </div>
                            <div className='col-md-6 text-right'>
                                <p>Designed & Developed By <a href='https://www.facebook.com/hesham.oraby.31/' target='_blank'>Hesham Orabii</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        
        )
    }
}

export default Footer;