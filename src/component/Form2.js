import React from 'react'

class Form2 extends React.Component {
	constructor(){
		super()
		this.state = {
			fname: "" , 
			lname: "" ,
			isFriendly: true,
			Gender: "",
			favcolor: "red"
		}
		this.handle = this.handle.bind(this);
	}

	handle(event) {
		const {name, value, type, checked} = event.target
		type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
	}


	// 1
	// handle(event) {
	// 		 this.setState({
	// 		 	[event.target.name]: event.target.value
	// 		 })
	// 	}

	// 2
	// handle(event) {
	// 	const {name, value} = event.target
	// 	this.setState({
	//  		[name]: value 
	//  	})
	// }	
	

	render(){
		return(
			<form>
				<input 
					type="text" 
					value={this.state.fname}
					name="fname" 
					placeholder="first name" 
					onChange={this.handle}
				/> <br />
				
				<input 
					type="text" 
					value={this.state.lname}
					name="lname" 
					placeholder="last name" 
					onChange={this.handle}
				/> <br />
				
				<textarea value={"some default values"} /> <br />

				<label>
					<input 	
						type="checkbox"
						name="isFriendly"
						onChange = {this.handle}
						checked= {this.state.isFriendly}
					/> Is Friendly	
				</label> <br />


				<label>
					<input 	
						type="radio"
						name="Gender"
						value="male"
						onChange = {this.handle}
						checked= {this.state.Gender === "male"}
					/> Male	
				</label> <br />

				<label>
					<input 	
						type="radio"
						name="Gender"
						value="female"
						onChange = {this.handle}
						checked= {this.state.Gender === "female"}
					/> Female	
				</label> <br />

				
				<label>favcolor</label>
				<select
					// value={this.state.favcolor}
					onChange={this.handle}	
					name="favcolor"
				>
					<option>red</option>
					<option >green</option>
					<option >blue</option>
					<option >black</option>
				</select>
				

				<h1>{this.state.fname} {this.state.lname} </h1>
				<h1>you are {this.state.Gender} </h1>
				<h1> your favourite colour is {this.state.favcolor} </h1>

				<button>submit</button>


			</form>
			 // Formik 
		)
	}
}




export default Form2