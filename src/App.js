import React, {Component} from 'react';
import './App.css';


class App extends Component{
render() {

    return(
     	<div className="formating">
			<div style={{padding: "30px"}}>
				<img src="http://placekitten.com/200/199" />
				<h3> Mr. Bhavesh </h3>
				<p> Phone: 7345624533 </p>
				<p> Email: bhavesh@gmail.com </p>
			</div>

			<div style={{padding: "30px"}}>
				<img src="http://placekitten.com/200/200" />
				<h3> Mr. Rajesh </h3>
				<p> Phone: 453245644 </p>
				<p> Email: raju@yahoo.com </p>
			</div>

			<div style={{padding: "30px"}}>
				<img src="http://placekitten.com/201/200" />
				<h3> Mr. Deepak </h3>
				<p> Phone: 725465345 </p>
				<p> Email: Despak@gmail.com </p>
			</div>

			<div style={{padding: "30px"}}>
				<img src="http://placekitten.com/199/200" />
				<h3> Mr. Jaideep </h3>
				<p> Phone: 8734653563 </p>
				<p> Email: jaideep3@gmail.com </p>
			</div>
    	</div>
    );
  }
}

export default App;

