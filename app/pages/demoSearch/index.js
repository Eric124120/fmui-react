/**
 * Created by huangchengwen on 17/1/3.
 */
import React from 'react'
import { Search } from '../../../packages'

export default class DemoSearch extends React.Component {
	constructor(prop) {
		super(prop);

	}

	searchSubmit() {
		console.log('search all');
	}

	render() {

		return(
			<div>
				<Search searchSubmit={this.searchSubmit.bind(this)}></Search>
			</div>
		)
	}
}