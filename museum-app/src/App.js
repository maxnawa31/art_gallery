import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardSection from './components/CardSection';
import NavBar from './components/NavBar';
import TextContainer from './components/TextContainer';
import HomePage from './components/HomePage'
import { Route, Link, Switch } from 'react-router-dom';
const uuidv1 = require('uuid/v1');



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: null
    }
  }
  componentDidMount() {
    fetch('https://www.rijksmuseum.nl/api/en/collection?key=qyswhbUR&format=json&ps=100')
    .then(res => res.json())
    .then(data => this.setState({ artworks: data.artObjects }));
  }
  render() {

    return (
      <div>
      <Switch>
        <Route
        path = '/'
        component = {props => (
          <HomePage
          artworks = {this.state.artworks}
          getMoreInfo = {this.getMoreInfo}
          />
        )}
        />
      </Switch>
      </div>

    );
  }
}

export default App;
