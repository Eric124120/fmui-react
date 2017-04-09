/**
 * Created by huangchengwen on 17/1/9.
 */
import { Component } from 'react';

export default class CellItemArrow extends Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div',
		direction: 'right'
	}

	render() {
		const {direction, Component, ...others} = this.props;
		return(
			<Component className="fm-list-arrow" {...others}>
				<span className={"fm-icon-arrow-" + direction}></span>
			</Component>
		)
	}
}