import React from "react";
import $ from 'jquery';


 class PopularQuestions extends React.Component{

    componentDidMount () {

        window.scrollTo(0, 0);

        $('.accord-title').click(function(){

            $(this).next().slideToggle().siblings('.accord-main').slideUp();
            
         })
    }

     render(){
        return (
            <div className='popular-questions text-center'>
                <div className='container'>
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
                            <div className='accord-title'>
                                <p>What countries does El Baba operate in?</p>
                            </div>
                            <div className='accord-main'>
                                <p>El Baba is available in all European Union countries and the United States of America</p>
                            </div>
                            <div className='accord-title'>
                                <p>How much is the shipping cost?</p>
                            </div>
                            <div className='accord-main'>
                                <p>
                                    Shipping fees are deducted but vary between the type of item and the weight.
                                    Please refer to the listing for the exact shipping fees,
                                    which are usually paid by El Baba buyers.
                                </p>
                            </div>
                            <div className='accord-title'>
                                <p>What are the conditions for returning products?</p>
                            </div>
                            <div className='accord-main'>
                                <p>
                                    Products can be returned within 14 days from the date of receiving the order, provided that they comply with some of the following cases:

                                    First case:
                                    The product was not what I expected (if the packaging was not opened) / does not match the description on the site.
                                    If you do not want the product, you must return it without using it, in its original packaging, closed as-is and all stickers are in proper condition.
                                    The second case:
                                    If the product is damaged if it arrives to you (reported within 24 hours)
                                    The product returned must be in its original packaging, and all accessories, stickers, and gifts should also be returned with the product. (Within 7 days)
                                    If the product has a manufacturing defect, you must pack the product that is returned in its original packaging, and all accessories, stickers, and gifts must also be returned with the product. (Within 14 days)
                                    </p>
                            </div>
                            <div className='accord-title'>
                                <p>I haven't received the order invoice, what should I do?</p>
                            </div>
                            <div className='accord-main'>
                                <p>
                                    The invoice is always included on the order or on the outside cover,
                                    and in case you do not receive the invoice please contact our
                                    customer service team and we will send you a copy of the invoice immediately.
                                </p>
                            </div>
                        </div>
                        <div className='offset-2'></div>
                    </div>

                </div>

            </div> 
        )
     }
    
}

export default PopularQuestions;