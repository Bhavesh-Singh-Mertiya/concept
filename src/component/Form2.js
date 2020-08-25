import React from 'react'

class Form2 extends React.Component {
	constructor(){
		super()
		this.state = {
			fname: "" , 
			lname: ""
		}
		this.handle = this.handle.bind(this);
	}

	handle(event) {
		 this.setState({
		 	[event.target.name]: event.target.value
		 })
	}

	

	render(){
		return(
			<form>
				<input type="text" name="fname" placeholder="first name" onChange={this.handle}/>
				<input type="text" name="lname" placeholder="last name" onChange={this.handle}/>
				<h1>{this.state.fname} {this.state.lname}</h1>
			</form>
		)
	}
}

export default Form2