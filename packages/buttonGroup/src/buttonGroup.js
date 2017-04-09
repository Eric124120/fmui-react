/**
 * Created by huangchengwen on 17/3/14.
 */
import React, { Component, PropTypes, cloneElement } from 'react';
import classNames from 'classnames';
import './buttonGroup.scss'

export default class ButtonGroup extends Component {
	static propTypes = {
		justify: PropTypes.bool,
		type: React.PropTypes.string,
		size: React.PropTypes.string
	};

	static defaultProps = {
		justify: false,
		type: 'default',
		size: 'normal'
	};

	render() {
		const {type, size, justify, children, className, ...props} = this.props;

		const cls = classNames({
			['fm-btn-group']: true,
			['fm-btn-justify']: justify,
			[className]: className
		});

		let component = (
			React.Children.map(children, (child, i) => {
				return cloneElement(child, Object.assign({
					type,
					size
				}, child.props));
			})
		);

		return (
			<div {...props} className={cls}>
				{component}
			</div>
		);
	}
}