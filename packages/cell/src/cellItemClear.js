/**
 * Created by huangchengwen on 17/1/9.
 */
import { Component } from 'react';

export default class CellItemClear extends Component {
	constructor(prop){
		super(prop)
	}


	static defaultProps = {
		Component: 'div'
	}


	render() {
		const {Component, ...others} = this.props;

		return(
			<Component className="fm-list-clear" {...others}>
				<span className="fm-icon-clear"></span>
			</Component>
		)
	}
}