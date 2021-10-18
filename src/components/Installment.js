import React from "react";

 class Installment extends React.Component{

    
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
     render(){
        return (
            <div className='about-us text-center'>
                <div className='container'>
                    <h2> Installment </h2>
                    <div className='row'>
                        <div className='offset-2'></div>
                        <div className='col-sm-8'>
    
                                <p>
                                    Now you can buy any product from El Baba and pay in installments : -<br/>

                                    - Installment service to clients El Baba easier and faster installment security services.<br/>

                                    - Installment service customers El Baba is available from 3 months to 12 years. <br/>

                                    El - Baba offers the installment service through: - <br/>

                                    &nbsp; &nbsp;   1- All America Bank<br/>

                                    &nbsp; &nbsp;   2- National Bank<br/>

                                    &nbsp; &nbsp;   3- Pensioners<br/>

                                    &nbsp; &nbsp;   4- Holders of bank deposits<br/>

                                    &nbsp; &nbsp;   5- Credit card holders<br/>
                                </p>
                        </div>
                        <div className='offset-2'></div>
                    </div>

                </div>

            </div> 
        )
     }
    
}

export default Installment;