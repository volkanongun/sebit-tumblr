import React from 'react'
import prettyDate from './Utils'

const Quote = (props) => {

	const handleClick = function(e){
		e.preventDefault();
		props.callbackFunc(props.props.posts.filter((item, i) => prettyDate(props.props.post["date-gmt"]) === prettyDate(item["date-gmt"])));
	}

	return (
		<div>
  			<h2>Quote</h2>
  			<time><a onClick={handleClick} href={prettyDate(props.props.post["date-gmt"])}><em>{prettyDate(props.props.post["date-gmt"])}</em></a></time>
  			<blockquote className="blockquote"><em>{props.props.post["quote-text"]}</em></blockquote>
  			<p dangerouslySetInnerHTML={{ __html: props.props.post["quote-source"] }}></p>
		</div>
	)
}

export default Quote