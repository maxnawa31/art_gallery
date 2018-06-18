import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../styles/IndivArtWork.css';
import TextCard from '../components/TextCard'
export default class IndivArtWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artWork: null
    }

  }
  componentDidMount() {
    fetch(`https://www.rijksmuseum.nl/api/en/collection/${this.props.id}?key=qyswhbUR&format=json&ps=100`)
    .then(res => res.json())
    .then(data => this.setState({ artWork: data.artObject }))
}
  render() {
    // debugger;
    return(
      <div>
      <NavBar/>
        {
          this.state.artWork === null ?
            <div className='loader'></div>
          :
          <div className='container'>
            <div className='outer-frame'>
            <div className = 'title-and-artist'>
              {this.state.artWork.longTitle}
            </div>
              <img className='indiv-image' src={`${this.state.artWork.webImage.url}`} alt=""/>
            </div>
            <TextCard >
            {this.state.artWork.plaqueDescriptionEnglish}
            </TextCard>
          </div>

        }

        </div>
    )
  }
}