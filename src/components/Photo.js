import React from 'react'
import prettyDate from './Utils'

const Photo = (props) => {

	const handleClick = function(e){
		e.preventDefault();
		props.callbackFunc(props.props.posts.filter((item, i) => prettyDate(props.props.post["date-gmt"]) === prettyDate(item["date-gmt"])));
	}
	
	return (
		<div>
			<h2>Photo</h2>
  			<time><a onClick={handleClick} href={prettyDate(props.props.post["date-gmt"])}><em>{prettyDate(props.props.post["date-gmt"])}</em></a></time>
  			<p><img src={props.props.post["photo-url-500"]} alt={props.props.post["photo-caption"]}/></p>
  			<p dangerouslySetInnerHTML={{ __html: props.props.post["photo-caption"] }}></p>
		</div>
	)
}

export default Photo