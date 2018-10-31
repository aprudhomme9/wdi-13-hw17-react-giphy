import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';

// const endPoint = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=&limit=5";

const key = '4uOolJLsKplOPt25PWCNWNXXmeQd9u5f';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: [],
      search: ''
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
  handleSubmit = (search) => {
    this.setState({
      search: search
    })
  }
  componentDidMount = async () => {
    try {
      await this.fetchGifs().then((gifs) => {
        this.setState({
          gifs: gifs
        })
      })
    } catch (err) {
      
    }
  }
  render() {
    console.log(this.state.search);
    return (
      <div className="App">
        <Results handleSubmit={this.handleSubmit} gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
