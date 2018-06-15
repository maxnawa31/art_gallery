import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../styles/IndivArtWork.css';
import Card from '../components/Card'
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
              <img className='indiv-image' src={`${this.state.artWork.webImage.url}`} alt=""/>
            </div>
            <Card >
            {this.state.artWork.description}
            </Card>
          </div>

        }

        </div>
    )
  }
}