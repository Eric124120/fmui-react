/**
 * Created by huangchengwen on 17/3/18.
 */
import React, { Component, PropTypes, cloneElement } from 'react';
import classNames from 'classnames';

export default class TabsNavItem extends Component {
	constructor(prop) {
		super(prop);
	}

	render() {
		const { selected, children, className, ...props} = this.props;

		const cls = classNames({
			['ui-tabs-item']: true,
			['selected']: selected,
			[className]: className
		});

		let component = (
			<div className={cls} {...props}>
				<span>{children}</span>
			</div>
		);

		return component;
	}
}