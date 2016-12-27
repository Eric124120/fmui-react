/**
 * Created by huangchengwen on 16/12/27.
 */
import React from 'react';
import classNames from 'classnames';
import './button.scss'

export default class Button extends React.Component {
	static propTypes = {
		disabled: React.PropTypes.bool,
		type: React.PropTypes.string,
		size: React.PropTypes.string
	};

	static defaultProps = {
		disabled: false,
		type: 'default',
		size: 'normal'
	};

	render() {
		const {type, icon, size, children, className, ...others} = this.props;
		const Component = this.props.href ? 'a' : 'button';
		const cls = classNames({
			['ml-btn']: true,
			['ml-btn-' + type]: type,
			['ml-btn-' + size]: size,
			[className]: className
		});

		if (icon){
			return (
				<Component {...others} className={cls}>
					<span className={icon}></span>
					{children}
				</Component>
			);
		}
		return (
			<Component {...others} className={cls}>{children}</Component>
		);
	}
}