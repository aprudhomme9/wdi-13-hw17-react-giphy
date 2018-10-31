import React, {Component} from 'react';

class Results extends Component {
	constructor(){
		super();

		this.state = {
			search: ''
		}
	}
	handleChange = (e) => {
		console.log(e.currentTarget.value);
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
		console.log(e.currentTarget.name);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state.search);
	}
	render(){
		console.log(this.state);


		return(
			
			<div>
				<h1>Search All of the GIFS</h1>
				<form onSubmit={this.handleSubmit}>
          			<input onChange={this.handleChange} type="text" value={this.state.search} name='search' placeholder="Enter City or State"/>
          			<button type="submit">Search</button>
      			</form>
			</div>
			


			)
	}
}



export default Results;