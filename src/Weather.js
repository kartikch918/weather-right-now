import React from 'react';
import './App.css';

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {temp: "0"};
    }

    componentDidMount(){

        const proxy = `https://cors-anywhere.herokuapp.com/`
        let api = `${proxy}https://api.darksky.net/forecast/dc999d9f7904ed6d720f8c2dc1f9a135/30.7333,76.7794`
        

        fetch(api)
        .then( data => {
            return (data.json());
        })
        .then( data1 => {
            console.log(data1);

        })
    }
    render(){
        return(
            <div>
                <h1>
                    Hey, the forecast today shows the following:
                </h1>
                <h1>
                    
                </h1>
            </div>
        )
    }
}

export default Weather;