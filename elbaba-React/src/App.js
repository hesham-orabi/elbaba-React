import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store/store';
import {Provider} from 'react-redux';
import './App.css';



// Import Component Page
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Accessories from './components/Accessories';
import AccessoriesProduct from './components/AccessoriesProduct';
import Watches from './components/Watches';
import WatchesProduct from './components/WatchesProduct';
import Perfumes from './components/Perfumes';
import PerfumesProduct from './components/PerfumesProduct';
import Toys from './components/Toys';
import ToysProduct from './components/ToysProduct';
import Electronics from './components/Electronics';
import ElectronicsProduct from './components/ElectronicsProduct';
import Sports from './components/Sports';
import SportsProduct from './components/SportsProduct';
import OffersProduct from './components/OffersProduct';
import Cart from './components/Cart';
import PopularQuestions from './components/PopularQuestions';
import AboutUs from './components/AboutUs';
import PolicyOfReturn from './components/PolicyOfReturn';
import Installment from './components/Installment';
import Shipping from './components/Shipping';
import HowItWork from './components/HowItWork';

class App extends React.Component{

    
    render(){
        
        return (
          <div className="App">

            <Provider store={store}>
                <Router>
                    <MyNavbar />
                        <Switch>

                            <Route path='/' component={Home} exact/>
                            <Route path='/mobile-accessories' component={Accessories} exact/>
                            <Route path='/mobile-accessories/product/:id' component={AccessoriesProduct} exact/>
                            <Route path='/watches' component={Watches} exact/>
                            <Route path='/watches/product/:id' component={WatchesProduct} exact/>
                            <Route path='/perfumes' component={Perfumes} exact/>
                            <Route path='/perfumes/product/:id' component={PerfumesProduct} exact/>
                            <Route path='/toys' component={Toys} exact/>
                            <Route path='/toys/product/:id' component={ToysProduct} exact/>
                            <Route path='/electronics' component={Electronics} exact/>
                            <Route path='/electronics/product/:id' component={ElectronicsProduct} exact/>
                            <Route path='/sports' component={Sports} exact/>
                            <Route path='/sports/product/:id' component={SportsProduct} exact/>
                            <Route path='/offers/product/:id' component={OffersProduct} exact/>
                            <Route path='/cart' component={Cart} exact/>
                            <Route path='/popular-questions' component={PopularQuestions} exact/>
                            <Route path='/about-us' component={AboutUs} exact/>
                            <Route path='/policy-of-returns' component={PolicyOfReturn} exact/>
                            <Route path='/installment' component={Installment} exact/>
                            <Route path='/shipping-and-delivery' component={Shipping} exact/>
                            <Route path='/how-it-work' component={HowItWork} exact/>
                            <Route path='*' component={PageNotFound} exact/>

                        </Switch>

                    <Footer />
                </Router>
            </Provider>
              
          </div>
        );
    }
}


export default App;
