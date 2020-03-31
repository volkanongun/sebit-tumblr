import React from 'react'
import prettyDate from './Utils'

const Conversation = (props) => {

  const handleClick = function(e){
    e.preventDefault();
    props.callbackFunc(props.props.posts.filter((item, i) => prettyDate(props.props.post["date-gmt"]) === prettyDate(item["date-gmt"])));
  }
  
	return (
		<div>
			<h2>Conversation</h2>
  			<time><a onClick={handleClick} href={prettyDate(props.props.post["date-gmt"])}><em>{prettyDate(props.props.post["date-gmt"])}</em></a></time>
  			<div>{props.props.post["conversation"].map(function(elem,i){
  				return (<div key={i}>
  					<strong>{elem.label}</strong> <span>{elem.phrase}</span>
  				</div>)
  			})}</div>
		</div>
	)
}

export default Conversation