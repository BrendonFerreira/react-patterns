import React from 'react'

export default ( state ) => {
	return (
		<div>
			{ state.components.map( Component => <Component/> ) }
		</div>
	)
}