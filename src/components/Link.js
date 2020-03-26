import React from 'react'
import prettyDate from './Utils'

const Link = (props) => {
	return (
		<div>
			<h2>Link</h2>
  			<time><em>{prettyDate(props.props.post["date-gmt"])}</em></time>
  			<p><a href={props.props.post["link-url"]} target="_blank" rel="noopener noreferrer">{props.props.post["link-text"]}</a></p>
  			<p dangerouslySetInnerHTML={{ __html: props.props.post["link-description"] }}></p>	
		</div>
	)
}

export default Link