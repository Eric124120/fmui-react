import classNames from 'classnames';
import './mask.scss'

export default class Mask extends React.Component {

	static PropTypes = {
		transparent: React.PropTypes.bool,
		show: React.PropTypes.bool,
		maskClick: React.PropTypes.func
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
			['ml-mask']: show,
			['ml-mask-bkg']: show && !transparent
		});

		return (
				<div {...others} className={cls} onClick={this.handler}></div>
		);
	};

}