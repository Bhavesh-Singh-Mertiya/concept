import React from 'react'

class FetchingData extends React.Component {
	
	
		constructor() {
			super()
			this.state = {
				charachter : []
			}
		}

		
	componentDidMount() {
		fetch("http://time.jsontest.com")	
		.then(response => response.json())
		.then(data => {
			this.setState({
				charachter: data
			})
		})
	}

	render() {
		return(
			<div>
				{this.state.charachter.time}
			</div>
		)
	}
}

export default FetchingData