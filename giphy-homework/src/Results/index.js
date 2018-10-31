import React, {Component} from 'react'

class Results extends Component {
	constructor(){
		super()
	}

	render(){
		console.log(this.props.gifs);
		const gifs = this.props.gifs.map((gif) => {
			return <img src={gif.url}/>
		})
		return(

			<ul>	
				{gifs}
			</ul>


			)
	}
}

export default Results;