import React from 'react'
import prettyDate from './Utils'

const Conversation = (props) => {
	return (
		<div>
			<h2>Conversation</h2>
  			<time><em>{prettyDate(props.props.post["date-gmt"])}</em></time>
  			<div>{props.props.post["conversation"].map(function(elem,i){
  				return (<div key={i}>
  					<strong>{elem.label}</strong> <span>{elem.phrase}</span>
  				</div>)
  			})}</div>
		</div>
	)
}

export default Conversation