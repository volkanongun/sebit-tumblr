import React, {useState} from 'react'
import Quote from './Quote'
import Photo from './Photo'
import BlogLink from './BlogLink'
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

	const parentCallback = function(data){
		props.callbackFunc(data);
	}

	const DetailsModal = ({ handleClose, item, show }) => {
		const showHideClassName = show ? "modal display-block" : "modal display-none";

	 	return (
		    <div className={showHideClassName}>
		    	<div className="modal-holder">
		    		<button onClick={handleClose} className="btn btn-sm btn-primary close-btn"><strong>X</strong> close</button>
		    		<div className="overflow details">
						{(() => {
							switch(item.type) {
						    case 'quote':
						      return <div className="modal-content">
						      			<Quote props={props}></Quote>
						      		</div>;
						    case 'photo':
						      return <div className="modal-content">
						      			<Photo props={props}></Photo>
						      		</div>;
						    case 'link':
						      return <div className="modal-content">
						      			<BlogLink props={props}></BlogLink>
						      		</div>;
						    case 'conversation':
						      return <div className="modal-content">
						      			<Conversation props={props}></Conversation>
						      		</div>;
						    case 'audio':
						      return <div className="modal-content">
						      			<Audio props={props}></Audio>
						      		</div>;
						    default:
						      return <div className="modal-content">
						      			<RegularPost props={props}></RegularPost>
						      		</div>;
						  	}
            			})()}
				    </div>
		    	</div>
		    </div>
		);
	};

	return (
		<div className="post">
			{(() => {
				switch(props.type) {
				    case 'quote':
				      return <div>
				      			<Quote props={props} callbackFunc={parentCallback}></Quote>
				      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
				      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
				      		</div>;
				    case 'photo':
				      return <div>
				      			<Photo props={props} callbackFunc={parentCallback}></Photo>
				      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
				      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
				      		</div>;
				    case 'link':
				      return <div>
				      			<BlogLink props={props} callbackFunc={parentCallback}></BlogLink>
				      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
				      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
				      		</div>;
				    case 'conversation':
				      return <div>
				      			<Conversation props={props} callbackFunc={parentCallback}></Conversation>
				      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
				      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
				      		</div>;
				    case 'audio':
				      return <div>
				      			<Audio props={props} callbackFunc={parentCallback}></Audio>
				      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
								<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
				      		</div>;
				    default:
				      return <div>
				      			<RegularPost props={props} callbackFunc={parentCallback}></RegularPost>
				      			<DetailsModal item={props} show={showDetailsModal} handleClose={handleClose}></DetailsModal>
				      			<div className="btn-holder"><button className="btn btn-primary" onClick={() => handleClick()}>See Details</button></div>
				      		</div>;
				  	}
			})()}
		</div>
	)
}

export default Post	