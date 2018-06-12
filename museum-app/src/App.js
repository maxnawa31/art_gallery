import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardSection from './components/CardSection';
import NavBar from './components/NavBar';
import TextContainer from './components/TextContainer'
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
    let allImages = ""
    if(this.state.artworks) {
      allImages = this.state.artworks.map(artwork => {
        return(
        <Card key={uuidv1()}>
          <CardSection>
            <TextContainer>
            <p className='title'>{artwork.longTitle}</p><br/>
            <p className='artist'>{artwork.principalOrFirstMaker}</p>
            </TextContainer>
          </CardSection>
          <CardSection>
        <img className='image' key={uuidv1()} src={artwork.webImage.url} alt=""/>
        </CardSection>
          </Card>
        )
      })
    }
    return (
      <div className='app'>
  {
    !this.state.artworks ?
      <div className='loader'>loading......</div>
      :
      <NavBar/>
  }
      <div className='all-cards-container'>
      {allImages}
      </div>
      </div>
    );
  }
}

export default App;
