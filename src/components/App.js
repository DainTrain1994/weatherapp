import React from 'react';
import Axios from 'axios';
import ZipSearch from './ZipSearch';

class App extends React.Component{
    state = {
        cityName: null,
        weather: null,
        temp: null
    }

    onSearchSubmit = async zips => {
        const response = await Axios.get('https://api.openweathermap.org/data/2.5/weather?', {
          params: {
            zip: zips + ",us",
            appid: "4d6b7b1b540d624d059fef1564c9af9f",
            units: "imperial"
          }  
        });
        this.setState({
            cityName: response.data.name,
            weather: response.data.weather[0].description,
            temp: response.data.main.temp
        })
    }
    
    render() {
        if(!this.state.cityName && !this.state.weather && !this.state.temp){
            return (
                <div className="ui container" style={{marginTop: '10px'}}>
                    <ZipSearch onSubmit = {this.onSearchSubmit}/>
                </div>
            );
        }
        else {
            return (
                <div className="ui container" style={{marginTop: '10px'}}>
                    <ZipSearch onSubmit = {this.onSearchSubmit}/>
                    <div className="ui container" style={{marginTop: '30px'}}> 
                        <h1>
                            City: {this.state.cityName}
                            <br/>
                            Weather: {this.state.weather}
                            <br/>
                            Temperature: {this.state.temp}
                        </h1>
                    </div>
                </div>
            );
        }
    }
}

export default App;

// import Axios from 'axios';
// Axios.get('api.openweathermap.org/data/2.5/weather?zip=33812,us&appid=4d6b7b1b540d624d059fef1564c9af9f');
// API Key: 4d6b7b1b540d624d059fef1564c9af9f
// Server: api.openweathermap.org
// API Call for ZIP: api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}