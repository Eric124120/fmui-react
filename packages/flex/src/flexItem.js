/**
 * Created by huangchengwen on 17/1/4.
 */
import React from 'react';

export default class FlexItem extends React.Component {
	constructor(prop) {
		super(prop)
	}
	static propTypes = {
		Component: React.PropTypes.string
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {Component, children, ...others } = this.props;

		return(
			<Component className="ml-flexbox-item" {...others}>
				{ children }
			</Component>
		)
	}
}