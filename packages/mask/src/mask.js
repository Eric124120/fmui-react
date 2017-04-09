import { Component, PropTypes} from 'react';
import classNames from 'classnames';
import './mask.scss'

export default class Mask extends Component {

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

		this.handler = () => {
			const {maskClick} = this.props;
			if('function' === typeof maskClick) {
				maskClick();
			}
		}

	}

	render() {
		const { show, transparent, maskClick, ...others } = this.props;
		const cls = classNames({
			['fm-mask']: show,
			['fm-mask-bkg']: show && !transparent
		});

		return (
				<div {...others} className={cls} onClick={this.handler}></div>
		);
	};

}