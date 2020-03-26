import React, {useState} from 'react'
import Quote from './Quote'
import Photo from './Photo'
import Link from './Link'
import Conversation from './Conversation'
import Audio from './Audio'
import RegularPost from './RegularPost'

const Post = (props) => {

	const [showDetailsModal, setShowDetailsModal] = useState(false);

	const handleClose = function(){
		setShowDetailsModal(false);
	}

	const handleClick = function(id){
		setShowDetailsModal(true);
	}

	function contentSwitcher(type){
		switch(type) {
		    case 'quote':
		      return <div class="modal-content">
		      			<Quote props={props}></Quote>
		      		</div>;
		    case 'photo':
		      return <div class="modal-content">
		      			<Photo props={props}></Photo>
		      		</div>;
		    case 'link':
		      return <div class="modal-content">
		      			<Link props={props}></Link>
		      		</div>;
		    case 'conversation':
		      return <div class="modal-content">
		      			<Conversation props={props}></Conversation>
		      		</div>;
		    case 'audio':
		      return <div class="modal-content">
		      			<Audio props={props}></Audio>
		      		</div>;
		    default:
		      return <div class="modal-content">
		      			<RegularPost props={props}></RegularPost>
		      		</div>;
		  	}
	}

	const DetailsModal = ({ handleClose, item, show }) => {
		const showHideClassName = show ? "modal display-block" : "modal display-none";

		console.log(item, " π");

	 	return (
		    <div className={showHideClassName}>

		    	<div className="modal-holder">

		    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn"><strong>X</strong> close</button>

		    		<div className="overflow details">
						{contentSwitcher(item.type)}
				    </div>
		    	</div>
			       
		    </div>
		);
	};

	function renderSwitch(type) {
	  switch(type) {
	    case 'quote':
	      return <div>
	      			<Quote props={props}></Quote>
	      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
	      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
	      		</div>;
	    case 'photo':
	      return <div>
	      			<Photo props={props}></Photo>
	      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
	      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
	      		</div>;
	    case 'link':
	      return <div>
	      			<Link props={props}></Link>
	      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
	      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
	      		</div>;
	    case 'conversation':
	      return <div>
	      			<Conversation props={props}></Conversation>
	      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
	      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
	      		</div>;
	    case 'audio':
	      return <div>
	      			<Audio props={props}></Audio>
	      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
					<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
	      		</div>;
	    default:
	      return <div>
	      			<RegularPost props={props}></RegularPost>
	      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
	      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
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