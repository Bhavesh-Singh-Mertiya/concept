import React, {Component} from 'react'
// import './App.css';
// import PropStyle from './component/PropStyle';
// import Data from './Data';


class App extends Component {
	constructor(){
		super()
		this.state = {
			count: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevstate => {
			return{
				count: prevstate.count+1	
			}
		})
	}

	render() {
		return(
			<div style={{padding:"20px"}}>
				<h1>{this.state.count} </h1>
				<button onClick={this.handleClick}> Change </button>
			</div>	
		)	
	}
}

	// const hello = Data.map(i => <PropStyle key={i.id} Question={i.ques} Answer={i.ans} />)	

	// const all = Data.map(i => {
	// 	return (
	// 		console.log(i.ans)			
	// 		// <PropStyle key={i.id} question={i.ques} answer={i.ans} />
	// 	)
	// })
 
 // console.log(hello)

    // return(
    // 	<div>
    //  		{hello}
    // 	</div>
    // );
  
// }

export default App;

