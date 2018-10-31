import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const endPoint = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=&limit=5";

const key = '4uOolJLsKplOPt25PWCNWNXXmeQd9u5f';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: []
    }

  }

  fetchGifs = async () => {
    try {
      const search = 'lol'
      const limit = 20
      const gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + key + '&limit=' + limit);
      const gifsJSON = await gifs.json();
      return gifsJSON
    } catch (err) {
      return err
    }
  }
  componentDidMount(){
    this.fetchGifs().then((gifs) => {
      this.setState({
        gifs: gifs
      })
    })
  }
  render() {
    console.log(this.state.gifs);
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
