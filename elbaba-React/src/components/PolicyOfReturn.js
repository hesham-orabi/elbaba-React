import React from "react";



 class PolicyOfReturn extends React.Component{

    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
     render(){
        return (
            <div className='polict-return text-center'>
                <div className='container'>
                    <h2> Policy Of Return</h2>
                    <div className='row'>
                        <div className='offset-2'></div>
                        <div className='col-sm-8'>
    
                                <p>
                                    Products can be returned within 14 days from the date of receiving the order, provided that they comply with some of the following cases: <br/><br/>

                                    <span>First case:</span> <br/>
                                    The product was not what I expected (if the packaging was not opened) / does not match the description on the site.
                                    If you do not want the product, you must return it without using it, in its original packaging, closed as-is and all stickers are in proper condition. <br/><br/>
                                    <span>second case:</span> <br/>
                                    If the product is damaged if it arrives to you (reported within 24 hours)
                                    The product returned must be in its original packaging, and all accessories, stickers, and gifts should also be returned with the product. (Within 7 days)
                                    If the product has a manufacturing defect, you must pack the product that is returned in its original packaging, and all accessories, stickers, and gifts must also be returned with the product. (Within 14 days)
                                </p>
                        </div>
                        <div className='offset-2'></div>
                    </div>

                </div>

            </div> 
        )
     }
    
}

export default PolicyOfReturn;