import React from 'react';
import {Link} from "react-router-dom";

class PageNotFound extends React.Component{
        
    componentDidMount=()=>{
        window.scrollTo(0, 0);
    }
    render(){
        return (
       

                    <div id="notfound">
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>Oops!</h1>
                                <h2>404 - The Page can't be found</h2>
                            </div>
                            <Link to="/">Go TO Homepage</Link>
                        </div>
                    </div>

               

            )
    }

}

export default PageNotFound;