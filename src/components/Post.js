import React from 'react'

const Post = (props) => {

	function renderSwitch(type) {
	  switch(type) {
	    case 'quote':
	      return <div>Quote</div>;
	    case 'photo':
	      return <div>Photo</div>;
	    case 'link':
	      return <div>Link</div>;
	    case 'conversation':
	      return <div>Conversation</div>;
	    case 'audio':
	      return <div>Audio</div>;
	    case 'regular':
	      return <div>Regular</div>;
	  }
	}

	return (
		<div>

			{renderSwitch(props.type)}

		</div>
	)
}

export default Post	