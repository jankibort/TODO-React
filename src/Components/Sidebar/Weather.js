import React from 'react';

class Weather extends React.Component {
    state = {
        weather: ''
    }

    // async componentDidMount() {
    //     try {
    //         let result = await fetch('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4d' +
    //             'c2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json');
    //         let json = await result.json();
    //         console.log(json);
    //     } catch { }


    //     // const url = "https://www.metaweather.com/api/location/523920"
    //     // const response = await fetch(url, {
    //     //     method: "GET",
    //     //     headers: {
    //     //         "Access-Control-Allow-Origin": "*"
    //     //     }
    //     // });
    //     // const jsonData = await response.json();
    //     // this.setState({ weather: jsonData.consolidated_weather[0].weather_state_name });
    // }

    render() {
        return (
            <div>
                {this.state.weather ? <div className="pb-2">Warsaw's weather for today: {this.state.weather}</div> : ""}
            </div>
        );
    }
}

export default Weather;