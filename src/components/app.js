import React, { Component } from 'react';

import SearchBar from '../cotainers/search_bar';
import WeatherList from '../cotainers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
