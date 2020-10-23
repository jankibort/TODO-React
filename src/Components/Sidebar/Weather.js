import React from 'react';

class Weather extends React.Component {
    state = {
        todaysForecast: null,
        city: null
    }

    async componentDidMount() {
        const url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/523920";

        fetch(url).then((res) => { return res.json(); }).then((data) => {
            const weather = data;
            this.setState({
                todaysForecast: weather.consolidated_weather[0].weather_state_name,
                city: weather.title
            });
        });

    }

    render() {
        return (
            <div className="pb-2">
                <div className="pb-2">Weather in {this.state.city}: {this.state.todaysForecast}</div>
            </div>
        );
    }
}

export default Weather;