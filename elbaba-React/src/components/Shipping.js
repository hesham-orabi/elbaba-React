import React from "react";

 class Shipping extends React.Component{
    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }

     render(){
        return (
            <div className='shipping text-center'>
                <div className='container'>
                    <h2> Shipping And Delivery </h2>
                    <div className='row'>
                        <div className='offset-2'></div>
                        <div className='col-sm-8'>
    
                                <p>
                                    For your inquiries please call : <span>+44 05496330199</span> <br/>

                                    Or text us on the website or the facebook page<br/>

                                    <span>www.facebook.com/Elbaba</span><br/>

                                    Kindly be informed that we officially open form Saturday to Thursday except for the official holidays as the the deliver will be determined according to the chosen delivery service. <br/>

                                    <span>Deliveing home:</span> <br/> delivery time starts from the day you order until the first trial of the delivery man tries to deliver the order from 10 pm to 6 on from Saturday to Thursday.
                                </p>
                        </div>
                        <div className='offset-2'></div>
                    </div>

                </div>

            </div> 
        )
     }
    
}

export default Shipping;