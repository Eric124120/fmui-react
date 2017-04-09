/**
 * Created by huangchengwen on 16/12/27.
 */
import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './button.scss'

export default class Button extends Component {
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
			['fm-btn']: true,
			['fm-btn-' + type]: type,
			['fm-btn-' + size]: size,
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