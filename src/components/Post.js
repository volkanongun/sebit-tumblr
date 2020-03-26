import React from 'react'
import Quote from './Quote'
import Photo from './Photo'
import Link from './Link'
import Conversation from './Conversation'
import Audio from './Audio'
import RegularPost from './RegularPost'

const Post = (props) => {

	function prettyDate(d){

		let split = d.split(" ");
		let newDate = split[0].split("-")[1] + " " + split[0].split("-")[2] + " " + split[0].split("-")[0]

		return newDate;
	}

	function renderSwitch(type) {
	  switch(type) {
	    case 'quote':
	      return <div>
	      			<Quote props={props}></Quote>
	      			<div className="btn-holder"><button className="btn btn-primary">See Details</button></div>
	      		</div>;
	    case 'photo':
	      return <div>
	      			<Photo props={props}></Photo>
	      			<div className="btn-holder"><button className="btn btn-primary">See Details</button></div>
	      		</div>;
	    case 'link':
	      return <div>
	      			<Link props={props}></Link>
	      			<div className="btn-holder"><button className="btn btn-primary">See Details</button></div>
	      		</div>;
	    case 'conversation':
	      return <div>
	      			<Conversation props={props}></Conversation>
	      			<div className="btn-holder"><button className="btn btn-primary">See Details</button></div>
	      		</div>;
	    case 'audio':
	      return <div>
	      			<Audio props={props}></Audio>
					<div className="btn-holder"><button className="btn btn-primary">See Details</button></div>
	      		</div>;
	    default:
	      return <div>
	      			<RegularPost props={props}></RegularPost>
	      			<div className="btn-holder"><button className="btn btn-primary">See Details</button></div>
	      		</div>;
	  }
	}

	return (
		<div className="post">
			{renderSwitch(props.type)}
		</div>
	)
}

export default Post	