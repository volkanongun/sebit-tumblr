import React from 'react'
import prettyDate from './Utils'

const Photo = (props) => {
	return (
		<div>
			<h2>Photo</h2>
  			<time><em>{prettyDate(props.props.post["date-gmt"])}</em></time>
  			<p><img src={props.props.post["photo-url-500"]} alt={props.props.post["photo-caption"]}/></p>
  			<p dangerouslySetInnerHTML={{ __html: props.props.post["photo-caption"] }}></p>
		</div>
	)
}

export default Photo