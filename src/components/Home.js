import React from 'react';
import {Container, Card, Carousel, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

class Home extends React.Component{

    componentDidMount () {
    
        window.scrollTo(0, 0);

        $(".carousel").carousel({
            interval : 2000
        });

        $('.accord-title').click(function(){

            $(this).next().slideToggle().siblings('.accord-main').slideUp();
            
         })
    }
    
    render(){
        var items;
        if(window.innerWidth >= 992){
            items=4
        }
        if(window.innerWidth < 992   && window.innerWidth >= 576){
            items=3
        }
        if(window.innerWidth < 576 && window.innerWidth > 414){
            items=2
        }
        if(window.innerWidth < 414){
            items=1
        }

        return (
            <>
                <div className='slider container-fluid'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/home/slider/slider1.jpg'}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/home/slider/slider2.jpg'}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/home/slider/slider3.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/home/slider/slider4.jpg'}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/home/slider/slider5.jpg'}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='large-items'>
                    <Container>
                        <Row>
                            <Col>
                                <Link to='/mobile-accessories'>
                                    <span>Accessories</span>
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/home/largeItems/accessories.jpg'} alt="First slide"/>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/perfumes'>
                                        <span>Perfumes</span>
                                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/home/largeItems/perfumes.jpg'} alt="First slide"/>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to='/toys'>
                                    <span>Toys</span>
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/home/largeItems/toys.jpg'} alt="First slide"/>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/watches'>
                                    <span>Watches</span>
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/home/largeItems/watches.jpg'} alt="First slide"/>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className='day-offers'>
                    <Container>
                        <h2>Day Offers</h2>
                        <Row>
                            <OwlCarousel
                                className='owl-theme'
                                items={items}
                                autoplay
                                autoplayTimeout={1500}
                                nav
                                loop
                                margin={10}
                            >
                                
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o1.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 5%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/1'>Lenovo- Gaming 3 15IMH05 (Intel® Core™I7-10750H - 16GB - 1TB+256GBSSD - NVIDIA® GeForce® GTX1650 4GB - 15.6" HD Black+ Tab E7 For Free</Link>
                                            </Card.Text>
                                            <h3> 195$ &nbsp;<span>250$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o2.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 15%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/2'>Xiaomi Mi Smart Band 5 Global Version  - Black</Link>
                                            </Card.Text>
                                            <h3> 97$ &nbsp;<span>120$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o3.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 13%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/3'>Media Tech MT.1700 Drum Vacuum Cleaner 1600 Watt MDoffer</Link>
                                            </Card.Text>
                                            <h3> 750$ &nbsp;<span>900$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o4.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 20%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/4'>MSI LAPOTP GF63 THIN 9SCSR ( I5-9300H-8GB RAM-512GB SSD-15.6 INCH FHD-NG FORCE GTX 1650 TI 4GB-DOS )+MOUSE+PAD MOUSE For Free MSIOffer</Link>
                                            </Card.Text>
                                            <h3> 1100$ &nbsp;<span>1350$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o5.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 7%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/5'>Braun Silk-épil 1 1170 Epilator - Pink PerscareOffer</Link>
                                            </Card.Text>
                                            <h3> 705$ &nbsp;<span>800$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o6.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 5%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/6'>Braun 6-in-1 All-in-one Trimmer 3 MGK3221, Beard Trimmer for Men PerscareOffer</Link>
                                            </Card.Text>
                                            <h3> 379$ &nbsp;<span>500$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o7.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 11%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/7'>Fresh Microwave, 20 Liters, 700 Watt, White - FMW-20MC-W MDoffer</Link>
                                            </Card.Text>
                                            <h3> 440$ &nbsp;<span>650$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o8.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 8%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/8'>Nikai 32 Inch HD LED TV NE32LED + (32 Tv Wall mount for free)</Link>
                                            </Card.Text>
                                            <h3> 1550$ &nbsp;<span>1900$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o9.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 4%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/9'>Fresh Freestanding Dishwasher, 8 Place Settings, 45 cm, Silver - WQP8-9259 MDoffer</Link>
                                            </Card.Text>
                                            <h3> 950$ &nbsp;<span>1300$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='item'>
                                    <Card>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/products/o10.jpg'} />
                                        <Card.Body>
                                            <span className='offer'>Offer 9%</span>
                                            <Card.Text>
                                                <Link to='/offers/product/10'>Sandisk Cruzer Spark 16GB, USB 2.0, Flash Drive ( 2 Flash memory offer )</Link>
                                            </Card.Text>
                                            <h3> 40$ &nbsp;<span>52$</span> </h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                
                            </OwlCarousel>
                        </Row>
                    </Container>
                </div>


                <div className='accessories-home'>
                    <Container>

                        <div className='acc-title'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 >Mobile Phone</h3>
                                    <p><Link to='/mobile-accessories'>Show More</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='acc-products'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/mobile-accessories/product/1'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/a1.jpg'} />
                                        <p>Huawei Y5p dual SIM phone - 5.45 inches screen, 32 GB, 2 GB RAM, 4G LTE, black</p>
                                        <h4>100$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/mobile-accessories/product/2'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/a2.jpg'} />
                                        <p>Samsung Galaxy Grand Prime Plus Black</p>
                                        <h4>110$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/mobile-accessories/product/3'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/a3.jpg'} />
                                        <p>Infinix Smart 5, 2GB RAM, 32GB Memory Blue</p>
                                        <h4>120$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/mobile-accessories/product/4'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/a4.jpg'} />
                                        <p>Redmi 9A RAM 2 mobile phone with 32GB memory</p>
                                        <h4>115$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/mobile-accessories/product/5'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/a5.jpg'} />
                                        <p>Samsung Galaxy A01 Dual SIM - 16GB, 2GB RAM, 4G LTE, Red, SM-A015FZ</p>
                                        <h4>145$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/mobile-accessories/product/6'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/a6.jpg'} />
                                        <p>Redmi 9C RAM 2 32GB Memory Blue</p>
                                        <h4>125$</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>


                <div className='watches-home'>
                    <Container>

                        <div className='watches-title'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 >Watches</h3>
                                    <p><Link to='/watches'>Show More</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='watches-products'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/watches/product/1'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/w1.jpg'} />
                                        <p>SET.1330 M</p>
                                        <h4>20$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/watches/product/10'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/w10.jpg'} />
                                        <p>Casio Men's Black Dial Leather Band Watch - MTP-V001GL-1BUDF</p>
                                        <h4>45$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/watches/product/11'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/w11.jpg'} />
                                        <p>Casio Marine Men's Black Dial Resin Band Watch - MRW-200H-9BVDF, Analog, Quartz</p>
                                        <h4>65$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/watches/product/14'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/w14.jpg'} />
                                        <p>Citizen Dress Watch For Men Analog Stainless Steel - BI5006-81P</p>
                                        <h4>200$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/watches/product/15'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/w15.jpg'} />
                                        <p>BI5006-81L CITIZEN WATCH FOR MEN - SILVER&GOLD</p>
                                        <h4>190$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/watches/product/18'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/w18.jpg'} />
                                        <p>Swatch Casual Watch For Women Analog Stainless Steel - SVOC100M</p>
                                        <h4>250$</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>


                <div className='perfumes-home'>
                    <Container>

                        <div className='perfumes-title'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 >Perfumes</h3>
                                    <p><Link to='/perfumes'>Show More</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='perfumes-products'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/perfumes/product/1'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/p1.jpg'} />
                                        <p>ALREHAB FANTASTIC EDP 50ML</p>
                                        <h4>6$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/perfumes/product/2'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/p2.jpg'} />
                                        <p>NEW NB BLEU POUR HOMME</p>
                                        <h4>8$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/perfumes/product/4'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/p4.jpg'} />
                                        <p>MYSTIC blue 100ML</p>
                                        <h4>9$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/perfumes/product/5'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/p5.jpg'} />
                                        <p>NB NEW BLUE WOMEN EDT 100ML</p>
                                        <h4>14$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/perfumes/product/6'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/p6.png'} />
                                        <p>NB NEW red MEN EDT 100ML</p>
                                        <h4>120$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/perfumes/product/19'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/p19.jpg'} />
                                        <p>PRIVE  ONCE UPONA TIME</p>
                                        <h4>13$</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>


                <div className='electronic-home'>
                    <Container>

                        <div className='electronic-title'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 >Electronics</h3>
                                    <p><Link to='/electronics'>Show More</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='electronic-products'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/electronics/product/1'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/e1.jpg'} />
                                        <p>Nikai 32 Inch HD LED TV NE32LED + (32 Tv Wall mount for free)</p>
                                        <h4>110$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/electronics/product/11'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/e11.jpg'} />
                                        <p>Lenovo IdeaPad 330-15IGM  15.6 - Celeron N4000 - 4 GB RAM - 1 TB HDD ,DOs</p>
                                        <h4>420$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/electronics/product/26'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/e26.jpg'} />
                                        <p>SUB F&D WIRELESS T.388</p>
                                        <h4>195$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/electronics/product/23'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/e23.jpg'} />
                                        <p>Fresh Deep Freezer FDF-330 HAOFF</p>
                                        <h4>180$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/electronics/product/12'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/e12.jpg'} />
                                        <p>PRINTER CANON INKJET MFP E474</p>
                                        <h4>150$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/electronics/product/6'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/e6.jpg'} />
                                        <p>Ultra 50 Inch 4K UHD Smart TV UT50S4KU</p>
                                        <h4>270$</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>

                <div className='toys-home'>
                    <Container>

                        <div className='toys-title'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 >Toys</h3>
                                    <p><Link to='/toys'>Show More</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='toys-products'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/toys/product/1'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/t1.jpg'} />
                                        <p>Rubik's Cube 0111</p>
                                        <h4>1$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/toys/product/2'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/t2.jpg'} />
                                        <p>Thomas Train</p>
                                        <h4>1.5$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/toys/product/8'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/t8.jpg'} />
                                        <p>Excavator model toy with rechargeable remote control</p>
                                        <h4>8$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/toys/product/5'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/t5.jpg'} />
                                        <p>T13 jungle animals manual movement</p>
                                        <h4>6$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/toys/product/15'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/t15.jpg'} />
                                        <p>PHillips Bike Size 20</p>
                                        <h4>80$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/toys/product/11'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/t11.jpg'} />
                                        <p>Casio Mini Keyboard, Black - SA-78</p>
                                        <h4>90$</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>


                <div className='sports-home'>
                    <Container>

                        <div className='sports-title'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 >Sports</h3>
                                    <p><Link to='/sports'>Show More</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='sports-products'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/sports/product/1'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/s1.jpg'} />
                                        <p>Treadmill Profit 666D</p>
                                        <h4>220$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/sports/product/6'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/s6.jpg'} />
                                        <p>Treadmill Profit MT-1916</p>
                                        <h4>270$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/sports/product/11'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/s11.jpg'} />
                                        <p>Pushups On Push Up Bars</p>
                                        <h4>26$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/sports/product/4'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/s4.jpg'} />
                                        <p>Profit Elliptical Trainer - KLJ-6.5 HA</p>
                                        <h4>235$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/sports/product/13'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/s13.jpg'} />
                                        <p>Revoflex Xtreme abdominal trainer</p>
                                        <h4>33$</h4>
                                    </Link>
                                </div>
                                <div className='col-lg-2 col-md-3  col-sm-6' >
                                    <Link to='/sports/product/5'>
                                        <img src={process.env.PUBLIC_URL + '/images/products/s5.jpg'} />
                                        <p>Full Whole Body Super Fit Vibration Massage Machine CFM 014</p>
                                        <h4>320$</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>


                <div className='accord text-center'>
                    <Container>
                        <h2> Popular Questions</h2>
                        <div className='row'>
                            <div className='offset-2'></div>
                            <div className='col-sm-8'>
                                <div className='accord-title'>
                                    <p>How do I place an order?</p>
                                </div>
                                <div className='accord-main'>
                                    <p>
                                        Shopping from El Baba is very easy! Once you find the product you want to buy,
                                        follow the following steps: Click on "Buy Now", to add the product to the shopping cart,
                                        click on the "shopping cart" on the top left,
                                        register a new account / login to your account by entering the email and password Enter the delivery address.
                                        Choose the payment method you prefer. Press “Confirm Order” to proceed to the completion 
                                        of the payment process and make the order. Once the order is made, it will be automatically confirmed,
                                        either by e-mail, or we will contact you by phone to confirm the order if we need more details.
                                        Please note that the confirmation step is an essential step before shipping your order.
                                        If you have notes about confirming your order, contact us a few hours after making your order.
                                    </p>
                                </div>
                                <div className='accord-title'>
                                    <p>What are the payment options available to El Baba?</p>
                                </div>
                                <div className='accord-main'>
                                    <p>Cash on delivery -COD- (easy and simple payment method on your doorstep)</p>
                                </div>
                            </div>
                            <div className='offset-2'></div>
                        </div>

                    </Container>

                </div> 
            </>
        
        )
    }
    
}
export default Home;
