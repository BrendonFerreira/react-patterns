import React, { Component } from 'react'
import StateLessComponent from './stateless-component'

export default class StatefulComponent extends Component {

	constructor() {
		super()
		const me = 'stateful-component'
		this.state = {
			parent: me
		}
	}

	render( ) {

		return ( 
			<fieldset>
				<b>'StatefulComponent'</b>
				<p>Hello i'm an stateful component, i have the state</p>
				<p>independing from where i got this, could be from the redux</p>
				<p>mobx, or rat track</p>	

				
				<code>
					props = { JSON.stringify(this.props) }
				</code>

				<StateLessComponent {...this.state} />

			</fieldset>
		)

	}

}