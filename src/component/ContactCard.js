import React from 'react';
import './ContactCard.css';

function ContactCard(props) {
	return(
		<div className="formating">
			<div style={{padding: "1px"}}>
				<img src={props.contact.url} />
				<h3> {props.contact.name} </h3>
				<p> Phone: {props.contact.phone} </p>
				<p> Email: {props.contact.email} </p>
			</div>

			
    	</div>
	)
	
}

export default ContactCard;