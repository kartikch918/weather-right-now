import React from 'react';

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {temp: "0"};
    }

    componentDidMount(){

        const proxy = `https://cors-anywhere.herokuapp.com/`
        let api = `${proxy}/https://api.Weathersky.net/forecast/b9ec8785be758ca20484c4940d52e161/30.7334,76.7796`
        

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
                    Hello world
                </h1>
                <h1>
                    Welcome Here
                </h1>
            </div>
        )
    }
}

export default Weather;