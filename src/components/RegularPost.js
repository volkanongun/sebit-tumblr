import React from 'react'
import prettyDate from './Utils'

const RegularPost = (props) => {
	return (
		<div>
			<h2>{props.props.post["regular-title"] ? props.props.post["regular-title"] : "Blog Post"}</h2>
  			<time><em>{prettyDate(props.props.post["date-gmt"])}</em></time>
  			<div dangerouslySetInnerHTML={{ __html: props.props.post["regular-body"] }}></div>
		</div>
	)
}

export default RegularPost