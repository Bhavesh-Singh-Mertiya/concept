import React from 'react'

function PropStyle(props){
	console.log(props);
	return(
		<div>
			<h4> Question : {props.Question} </h4>
			<br />
			<h4> Answer: {props.Answer} </h4>
			<hr />
		</div>
	)
}

export default PropStyle