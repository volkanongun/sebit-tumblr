import React from 'react'
import prettyDate from './Utils'

const Audio = (props) => {
	return (
		<div>
			<h2>Audio</h2>
  			<time><em>{prettyDate(props.props.post["date-gmt"])}</em></time>
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