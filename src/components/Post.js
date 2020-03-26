import React from 'react'

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
	      			<h2>Quote</h2>
	      			<time><em>{prettyDate(props.post["date-gmt"])}</em></time>
	      			<blockquote className="blockquote"><em>{props.post["quote-text"]}</em></blockquote>
	      			<p dangerouslySetInnerHTML={{ __html: props.post["quote-source"] }}></p>
	      			<button className="btn btn-primary">See Details</button>
	      		</div>;
	    case 'photo':
	      return <div>
	      			<h2>Photo</h2>
	      			<time><em>{prettyDate(props.post["date-gmt"])}</em></time>
	      			<p><img src={props.post["photo-url-500"]} alt={props.post["photo-caption"]}/></p>
	      			<p dangerouslySetInnerHTML={{ __html: props.post["photo-caption"] }}></p>
	      			<button className="btn btn-primary">See Details</button>
	      		</div>;
	    case 'link':
	      return <div>
	      			<h2>Link</h2>
	      			<time><em>{prettyDate(props.post["date-gmt"])}</em></time>
	      			<p><a href={props.post["link-url"]} target="_blank" rel="noopener noreferrer">{props.post["link-text"]}</a></p>
	      			<p dangerouslySetInnerHTML={{ __html: props.post["link-description"] }}></p>
	      			<button className="btn btn-primary">See Details</button>
	      		</div>;
	    case 'conversation':
	      return <div>
	      			<h2>Conversation</h2>
	      			<time><em>{prettyDate(props.post["date-gmt"])}</em></time>
	      			<div>{props.post["conversation"].map(function(elem,i){
	      				return (<div key={i}>
	      					<strong>{elem.label}</strong> <span>{elem.phrase}</span>
	      				</div>)
	      			})}</div>
	      			<button className="btn btn-primary">See Details</button>
	      		</div>;
	    case 'audio':
	      return <div>
	      			<h2>Audio</h2>
	      			<time><em>{prettyDate(props.post["date-gmt"])}</em></time>
	      			<p>
	      				<span className="track-info"><strong>Artist :</strong> {props.post["id3-artist"]}</span>
						<span className="track-info"><strong>Album :</strong> {props.post["id3-album"]}</span>
						<span className="track-info"><strong>Year : </strong>{props.post["id3-year"]}</span>
						<span className="track-info"><strong>Track :</strong> {props.post["id3-track"]}</span>
						<span className="track-info"><strong>Title :</strong>{props.post["id3-title"]}</span>
	      			</p>
					<div dangerouslySetInnerHTML={{ __html: props.post["audio-embed"] }}></div>
					<button className="btn btn-primary">See Details</button>
	      		</div>;
	    default:
	      return <div>
	      			<h2>{props.post["regular-title"] ? props.post["regular-title"] : "Blog Post"}</h2>
	      			<time><em>{prettyDate(props.post["date-gmt"])}</em></time>
	      			<div dangerouslySetInnerHTML={{ __html: props.post["regular-body"] }}></div>
	      			<button className="btn btn-primary">See Details</button>
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