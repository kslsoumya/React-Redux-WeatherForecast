import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts';

import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    displayWeatherList(cityData) {

        const temps = cityData.list.map(value => value.main.temp);
        const humidities = cityData.list.map(value => value.main.humidity);
        const pressures = cityData.list.map(value => value.main.pressure);
        const { lon, lat} = cityData.city.coord;


        return (<tr key={cityData.city.name}>
            <td>
                <GoogleMap lat ={lat} lon ={lon} />
            </td>
            <td>
                <Charts data ={temps} color ='red'/>
                
            </td>
            <td>
            <Charts data ={pressures} color ='orange'/>
            </td>
            <td>
            <Charts data ={humidities} color ='blue'/>
            </td>
        </tr>
        )

    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>

                    </tr>

                </thead>
                <tbody>
                    {this.props.weatherList.map((item) => this.displayWeatherList(item))}

                </tbody>
            </table>

        )
    }
}

function mapStateToProps({ weatherList }) {
    return { weatherList }
}


export default connect(mapStateToProps)(WeatherList)