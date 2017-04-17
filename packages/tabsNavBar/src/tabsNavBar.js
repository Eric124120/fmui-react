/**
 * Created by huangchengwen on 17/3/18.
 */
import React, { Component, PropTypes, cloneElement } from 'react';
import classNames from 'classnames';
import './tabsNavBar.scss'

export default class TabsNavBar extends Component {
	constructor(prop) {
		super(prop);

	}

	static propTypes = {
		currentIndex: PropTypes.number,
		onSelect: PropTypes.func
	}

	static defaultProps = {
		currentIndex: 0,
		onSelect: () => {}
	}

	selectAction(selectIndex) {
		const { onSelect } = this.props;

		'function' === typeof onSelect
			&& onSelect(selectIndex);
	}


	render() {
		const { currentIndex, children, className, ...props } = this.props;

		const cls = classNames({
			['ui-tabs-bar']: true,
			[className]: className
		});

		let component = (
				React.Children.map(children, (child, index) => {
					return cloneElement(child, Object.assign({
						key: `tabs_item_${index}`,
						currentIndex,
						onClick: this.selectAction.bind(this, index),
						selected: currentIndex == index
					}, child.props));
				})
		);

		return (
			<div className="ui-tabs-bar-container">
				<div {...props} className={cls}>
					{component}
				</div>
			</div>

		);
	}
}