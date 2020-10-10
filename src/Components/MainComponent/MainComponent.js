import React,  {Component} from 'react';
import Home from '../Home Component/HomeComponent';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="noMargin">
                <Home/>
            </div>
        );
    }
}

export default Main;