import React from 'react'
import prettyDate from './Utils'

const BlogLink = (props) => {

	const handleClick = function(e){
		e.preventDefault();
		props.callbackFunc(props.props.posts.filter((item, i) => prettyDate(props.props.post["date-gmt"]) === prettyDate(item["date-gmt"])));
	}

	return (
		<div>
			<h2>BlogLink</h2>
  			<time><a onClick={handleClick} href={prettyDate(props.props.post["date-gmt"])}><em>{prettyDate(props.props.post["date-gmt"])}</em></a></time>
  			<p><a href={props.props.post["link-url"]} target="_blank" rel="noopener noreferrer">{props.props.post["link-text"]}</a></p>
  			<p dangerouslySetInnerHTML={{ __html: props.props.post["link-description"] }}></p>	
		</div>
	)
}

export default BlogLink