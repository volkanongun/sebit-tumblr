import React from 'react'
import prettyDate from './Utils'

const RegularPost = (props) => {

	const handleClick = function(e){
		e.preventDefault();
		props.callbackFunc(props.props.posts.filter((item, i) => prettyDate(props.props.post["date-gmt"]) === prettyDate(item["date-gmt"])));
	}
	
	return (
		<div>
			<h2>{props.props.post["regular-title"] ? props.props.post["regular-title"] : "Blog Post"}</h2>
  			<time><a onClick={handleClick} href={prettyDate(props.props.post["date-gmt"])}><em>{prettyDate(props.props.post["date-gmt"])}</em></a></time>
  			<div dangerouslySetInnerHTML={{ __html: props.props.post["regular-body"] }}></div>
		</div>
	)
}

export default RegularPost