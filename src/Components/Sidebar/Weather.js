import React from 'react';

class Weather extends React.Component {
    state = {
        weather: []
    }

    async componentDidMount() {
        try {
            let result = await fetch('https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4d' +
                'c2-a171-a23eec8f2172/resource/d3e96eb6-25ad-4d6c-8651-b1eb39155945/download/stopsingdansk.json');
            let json = await result.json();
            console.log(json);
        } catch { }


        // const url = "https://www.metaweather.com/api/location/523920"
        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: {
        //         "Access-Control-Allow-Origin": "*"
        //     }
        // });
        // const jsonData = await response.json();
        // this.setState({ weather: jsonData.consolidated_weather[0].weather_state_name });
    }

    render() {
        console.log(this.state.weather)
        return (
            <div className="pb-2">
                {this.state.weather ? "Warsaw's weather for today: " + this.state.weather : ""}
            </div>
        );
    }
}

export default Weather;