import React, {Component} from 'react'

class Results extends Component {
	constructor(){
		super()
	}

	render(){
		const gifs = this.props.gifs.map((gif, i) => {
			return (
				<div class='gif' key={i}>
				<iframe src={gif.embed_url} width="700" height="250" frameBorder="0" className="giphy-embed" allowFullScreen/>
				<p><a href={gif.url}>GIPHY</a></p>
				</div>
				)
		})
		return(

			<ul>	
				{gifs}
			</ul>


			)
	}
}

export default Results;