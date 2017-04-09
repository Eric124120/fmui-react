import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import './headerNavBar.scss';

export default class HeaderNavBar extends Component {

	constructor(props) {

		super(props);

	}

	static defaultProps = {
		show: true
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		show: PropTypes.bool,
		left: PropTypes.oneOf(['hide', 'back', 'notify']),
		leftClick: PropTypes.fun,
		right: PropTypes.oneOf(['hide', 'more']),
		rightClick: PropTypes.fun
	}



	render() {

		let { title, left, right, show, leftClick, rightClick, className, ...props } = this.props;

		let cCls = classNames({
			'fm-header': true,
			['fm-header-hidden']: !show,
			[className]: !!className
		});

		let lCls = classNames({
			 'fm-header-left': true,
			 ['left-' + left]: left
		 });

		 let rCls = classNames({
			 ['fm-header-right']: true,
			 ['right-' + right]: right
		 });
		
		let leftPath = {
			hide: '#',
			back: 'javascript:history.go(-1);void(0)',
			notify: '#/notify'
		}
		
		return (

				<div className={cCls} {...props}>
					<a href={leftPath[left]} onClick={leftClick}  className={lCls} ></a>
					<span className="fm-header-title">{ title }</span>
					<a href="#" onClick={rightClick}  className={rCls}></a>
				</div>

		)

	}

}