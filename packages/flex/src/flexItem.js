/**
 * Created by huangchengwen on 17/1/4.
 */
import { Component } from 'react';
import classNames from 'classnames';

export default class FlexItem extends Component {
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
		const {Component, className, children, ...others } = this.props;
		let cls = classNames({
			['fm-flexbox-item']: true,
			[className]: !!className
		});

		return(
			<Component className={cls} {...others}>
				{ children }
			</Component>
		)
	}
}