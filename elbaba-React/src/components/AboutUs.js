import React from "react";


 class AboutUs extends React.Component{
    
    componentDidMount=()=>{
        window.scrollTo(0,0);
    }

     render(){
        return (
            <div className='about-us text-center'>
                <div className='container'>
                    <h2> About Us</h2>
                    <div className='row'>
                        <div className='offset-2'></div>
                        <div className='col-sm-8'>
    
                                <p>
                                    We connect people and products –opening up a world of possibilities.

                                    From bracelets and backpacks to tablets and toy cars

                                    we give you access to everything you need and want.

                                    Our range is unparalleled, and our prices unbeatable.

                                    Driven by smart technology, everything we do is designed to put the power directly in your hands giving you the freedom to shop however, whenever and wherever you like. We’re trusted by millions,

                                    because we don’t just deliver to your doorstep, we were born here. With ElBaba.com

                                    you’ll always be getting a good deal – with exceptional
                                    service that makes your shopping experience as easy and seamless as possible.
                                    This is   El Baba – the power is in your hands.
                                </p>
                        </div>
                        <div className='offset-2'></div>
                    </div>

                </div>

            </div> 
        )
     }
    
}

export default AboutUs;