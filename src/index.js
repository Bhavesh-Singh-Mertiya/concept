import React from 'react';
import ReactDOM from 'react-dom';
// import Form from './component/Form';
import ContactCard from './component/ContactCard';
// import App from './App';



ReactDOM.render( 
	<div>
		<ContactCard contact={{ url:"http://placekitten.com/200/199", name: "Mr Bhavesh", phone:"333333333", email:"bhavesh@gmail.com" }}  />
		<ContactCard contact={{ url:"http://placekitten.com/201/199", name: "Mr Rajsa", phone:"44444444", email:"bhavesh@gmail.com" }}  />
		<ContactCard contact={{ url:"http://placekitten.com/199/199", name: "Mr Naman", phone:"33354345643", email:"bhavesh@gmail.com" }}  />
		<ContactCard contact={{ url:"http://placekitten.com/202/199", name: "Mr Depak", phone:"7452452454", email:"bhavesh@gmail.com" }}  />
	</div>
	,document.getElementById('root')
)






