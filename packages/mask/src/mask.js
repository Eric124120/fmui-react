import { Component, PropTypes} from 'react';
import ComponentModal from '../../base/component/ComponentModal';
import classNames from 'classnames';
import './mask.scss'

export default class Mask extends ComponentModal {

	static PropTypes = {
		transparent: PropTypes.bool,
		show: PropTypes.bool,
		maskClick: PropTypes.func
	};

	static defaultProps = {
		transparent: false,
		show: true,
		maskClick: null
	};

	constructor(props) {
		super(props);

		this.handler = (e) => {
			const {maskClick} = this.props;
			if('function' === typeof maskClick) {
				maskClick(e);
			}
		}

	}


	componentDidUpdate() {
        const { show } = this.props;

        // 防止当webkitOverflowScrolling生效时，遮罩无法全屏
        document.querySelector('body').style.webkitOverflowScrolling = show ? "auto" : 'touch';
    }

	touchMoveHandler(e) {
		// 当遮罩弹起时，禁止滚动
		e.preventDefault();

	}

	render() {
		const { show, transparent, maskClick, ...others } = this.props;
		const cls = classNames({
			['fm-mask']: show,
			['fm-mask-bkg']: show && !transparent
		});

		return (
			<div {...others} className={cls}
				 // 禁止滚动
				 onTouchMove={this.onTouchMove}
				 onClick={this.handler}></div>
		);
	};

}