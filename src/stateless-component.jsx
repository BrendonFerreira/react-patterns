import React, { Component } from 'react'


const StatelessComponent = props => {

	return ( 
		<fieldset>
			<b>'ContainerComponent'</b>
			<p>Hello i'm an stateless component, i just render things</p>
			<p>Like this things you've passed as props</p>
			<code>
				{ JSON.stringify(props) }
			</code>
		</fieldset>
	)

}

export default StatelessComponent