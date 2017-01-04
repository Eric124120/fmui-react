import React from 'react';
import classNames from 'classnames';
import './mask.scss'

export default class Mask extends React.Component {

	static PropTypes = {
		transparent: React.PropTypes.bool,
		show: React.PropTypes.bool,
		cancelFunc: React.PropTypes.func
	};

	static defaultProps = {
		transparent: false,
		show: true,
		cancelFunc: null
	};

	constructor(props) {
		super(props);

		this.handler = () => {
			const {cancelFunc} = this.props;
			if('function' === typeof cancelFunc) {
				cancelFunc();
			}
		}

	}

	render() {
		const { show, transparent,cancelFunc, ...others } = this.props;
		const cls = classNames({
			['ml-mask']: show,
			['ml-mask-bkg']: show && !transparent
		});

		return (
				<div {...others} className={cls} onClick={this.handler}></div>
		);
	};

}