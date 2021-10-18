import React from "react";

 class HowItWork extends React.Component{

    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
     render(){
        return (
            <div className='how-it-work text-center'>
                <div className='container'>
                    <h2> How It Works </h2>
                    <div className='row'>
                        <div className='offset-2'></div>
                        <div className='col-sm-8'>
    
                                <p>
                                    Shopping from <span>El Baba</span> is very easy! Once you find the product you want to buy,
                                    follow the following steps: Click on "Buy Now", to add the product to the shopping cart,
                                    click on the "shopping cart" on the top left,
                                    register a new account / login to your account by entering the email and password Enter the delivery address.
                                    Choose the payment method you prefer. Press “Confirm Order” to proceed to the completion 
                                    of the payment process and make the order. Once the order is made, it will be automatically confirmed,
                                    either by e-mail, or we will contact you by phone to confirm the order if we need more details.
                                    Please note that the confirmation step is an essential step before shipping your order.
                                    If you have notes about confirming your order,
                                        contact us a few hours after making your order.
                                </p>
                        </div>
                        <div className='offset-2'></div>
                    </div>

                </div>

            </div> 
        )
     }
    
}

export default HowItWork;