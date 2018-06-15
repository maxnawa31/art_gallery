import React, {Component} from 'react';
import Card from './Card';
import CardSection from './CardSection';
import TextContainer from './TextContainer';
import NavBar from '../components/NavBar'
import '../styles/HomePage.css'
import {Link} from 'react-router-dom';
const uuidv1 = require('uuid/v1');

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  getMoreInfo(id) {
    fetch(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=qyswhbUR&format=json&ps=100`)
    .then(res => res.json())
    .then(data => this.props.setIndivArtWork(data));
  }
  render() {
    let allImages = ""
    if(this.props.artworks) {
      allImages = this.props.artworks.map(artwork => {
        return(
      <Card key={uuidv1()}>
        <CardSection>
          <TextContainer>
              <Link
                className='more-info-link'
                to= {`artworks/${artwork.objectNumber}`}
                className='more-info-link'
                >
                <p className='title'>
                {
                  artwork.longTitle
                }
                </p>
              </Link><br/>
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
    !this.props.artworks ?
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

