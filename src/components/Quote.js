import React from 'react'
import prettyDate from './Utils'

const Quote = (props) => {

	return (
		<div>
  			<h2>Quote</h2>
  			<time><em>{prettyDate(props.props.post["date-gmt"])}</em></time>
  			<blockquote className="blockquote"><em>{props.props.post["quote-text"]}</em></blockquote>
  			<p dangerouslySetInnerHTML={{ __html: props.props.post["quote-source"] }}></p>
		</div>
	)
}

export default Quote