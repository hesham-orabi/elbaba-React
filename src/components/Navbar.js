import React from 'react';
import {Link} from "react-router-dom";
import {Container, Navbar, Nav} from 'react-bootstrap';
import CartIcon from './CartIcon';

class MyNavbar extends React.Component{

    
    render(){
        return (

                <Navbar bg="light" expand="lg">
                    <Container >
                        
                        <Link to="/" className="navbar-brand">El Baba</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className='nav-link' to="/">Home</Link>
                                <Link className='nav-link' to="/mobile-accessories">Mobile Phones and Accessories</Link>
                                <Link className='nav-link' to="/watches">Watches</Link>
                                <Link className='nav-link'  to="/perfumes">Perfumes</Link>
                                <Link className='nav-link' to="/electronics">Electronics</Link>
                                <Link className='nav-link' to="/toys">Toys</Link>
                                <Link className='nav-link' to="/sports">Sports Equipments</Link>
                            </Nav>
                            <CartIcon />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                

            )
    }
    
}
export default MyNavbar;