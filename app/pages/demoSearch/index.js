/**
 * Created by huangchengwen on 17/1/3.
 */
import { Component } from 'react'
import Search from '../../../packages/search'

export default class DemoSearch extends Component {
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