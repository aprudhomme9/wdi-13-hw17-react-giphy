import React, {Component} from 'react'

class Results extends Component {
	constructor(){
		super()
	}

	render(){
		const gifs = this.props.gifs.map((gif, i) => {
			return (
				<div class='gif' key={i}>
				<iframe src={gif.embed_url} width="800" height="350" frameBorder="0" className="giphy-embed" allowFullScreen/>
				<p><a href={gif.url}>GIPHY</a></p>
				</div>
				)
		})
		return(

			<div id='gifContainer'>	
				{gifs}
			</div>


			)
	}
}

export default Results;