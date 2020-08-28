import React from 'react'

class Form3 extends React.Component {
	
	constructor() {
		super()
		this.state = {
			fname: "",
			lname: "",
			age: "",
			gender: true
		}
		this.handle = this.handle.bind(this)
	}

	handle(event) {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div>	
				<form>
					<input 
						type="text"
						placeholder="First Name"
						onChange={this.handle}
						value={this.state.fname}
						name="fname"
					/> 
					<br />
					
					<input 
						type="text"
						placeholder="Last Name"
						name="lname"
						onChange={this.handle}
					/> 
					<br />
					
					<input 
						type="text"
						placeholder="Age"
						name="age"
						onChange={this.handle}
					/>
					<br />

					<input 
						type="radio" 
						name="gender"
						value="Male"
						checked={this.state.gender === "Male"}
						onChange={this.handle}
					/><label>Male</label> 
					<br />

					<input 
						type="radio" 
						name="gender"
						value="Female"
						checked={this.state.gender === "Female"}
						onChange={this.handle}
					/>Female
					<br />

					<select value={this.state.destination} name="destination" onChange={this.handle}>
						<option value=""> --- Please Choose a Destination --- </option>
						<option value="germany">Gemany</option>
						<option value="norway">Norway</option>
						<option value="northpole">Northpole</option>
						<option value="greece">Greece</option>						
					</select>

					<button> Submit </button>
				</form>	

				
				<hr />
				<h2>Entered Information </h2> <br />
				Your Name:  {this.state.fname} {this.state.lname}  <br />
				Your Age:  {this.state.age}  <br />
				Your Gender: {this.state.gender} <br />
				Destination: {this.state.destination} <br />
			</div>	
		)
	}
}

export default Form3;