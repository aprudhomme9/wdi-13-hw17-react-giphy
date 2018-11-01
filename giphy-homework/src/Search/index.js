import React, {Component} from 'react';

class Search extends Component {
	constructor(){
		super();

		this.state = {
			search: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getResults(this.state.search);
	}
	render(){

		return(

			<div>
				<h1>Search All of the GIFS</h1>
				<form onSubmit={this.handleSubmit}>
          			<input onChange={this.handleChange} type="text" value={this.state.search} name='search' placeholder="Fkn Fetch The GIFs"/>
          			<button type="submit">Search</button>
      			</form>
			</div>
			


			)
	}
}



export default Search;