import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Results from './Results';
// const endPoint = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=&limit=5";

const key = '4uOolJLsKplOPt25PWCNWNXXmeQd9u5f';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: [],
      hasSearched: false
    }

  } 

  fetchGifs = async (search) => {
    try {
      const search = search;
      const limit = 20
      const gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + key + '&limit=' + limit);
      const gifsJSON = await gifs.json();
      return gifsJSON
    } catch (err) {
      return err
    }
  }
  getResults = async (search, hasSearched) => {
    try {
      await this.fetchGifs(search).then((gifs) => {
        this.setState({
          gifs: gifs.data,
          hasSearched: hasSearched
        })
      })
    } catch (err) {
      
    }
}

  render() {
    console.log(this.state.gifs);
    return (
      <div className="App">
        <Search getResults={this.getResults} gifs={this.state.gifs}/>
        <Results gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
