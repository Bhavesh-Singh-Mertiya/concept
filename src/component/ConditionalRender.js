import React from 'react'

function ConditionalRender(props) {
	return(

		props.isLoading === true ? <h1>is Loading</h1> : <h1>it in not loading</h1>
	)
}

export default ConditionalRender