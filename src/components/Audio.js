import React from 'react'
import prettyDate from './Utils'

const Audio = (props) => {

	const handleClick = function(e){
		e.preventDefault();
		props.callbackFunc(props.props.posts.filter((item, i) => prettyDate(props.props.post["date-gmt"]) === prettyDate(item["date-gmt"])));
	}
	
	return (
		<div>
			<h2>Audio</h2>
  			<time><a onClick={handleClick} href={prettyDate(props.props.post["date-gmt"])}><em>{prettyDate(props.props.post["date-gmt"])}</em></a></time>
  			<p>
  				<span className="track-info"><strong>Artist :</strong> {props.props.post["id3-artist"]}</span>
				<span className="track-info"><strong>Album :</strong> {props.props.post["id3-album"]}</span>
				<span className="track-info"><strong>Year : </strong>{props.props.post["id3-year"]}</span>
				<span className="track-info"><strong>Track :</strong> {props.props.post["id3-track"]}</span>
				<span className="track-info"><strong>Title :</strong>{props.props.post["id3-title"]}</span>
  			</p>
			<div dangerouslySetInnerHTML={{ __html: props.props.post["audio-embed"] }}></div>
		</div>
	)
}

export default Audio