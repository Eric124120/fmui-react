/**
 * Created by huangchengwen on 17/1/9.
 */
import React from 'react';

export default class CellItemArrow extends React.Component {
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
			<Component className="ml-list-arrow" {...others}>
				<span className={"ml-icon-arrow-" + direction}></span>
			</Component>
		)
	}
}