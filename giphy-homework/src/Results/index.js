import React, {Component} from 'react'

class Results extends Component {
	constructor(){
		super()
	}

	render(){
		console.log(this.props.gifs);
		const gifs = this.props.gifs.map((gif, i) => {
			return (
				<div key={i}>
				<iframe src={gif.embed_url} width="480" height="202" frameBorder="0" className="giphy-embed" allowFullScreen/>
				<p><a href={gif.url}>via GIPHY</a></p>
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