/**
 * Created by huangchengwen on 17/3/9.
 */
import { Component } from 'react';

export default class CellItemTip extends Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {children, Component, ...others} = this.props;

		return(
				<Component className="fm-list-tip" {...others}>
					{ children }
				</Component>
		)
	}
}