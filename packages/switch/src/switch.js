/**
 * Created by huangchengwen on 16/12/31.
 */
import { Component, PropTypes } from 'react';
import './switch.scss'

export default class Switch extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			checked: this.props.defaultChecked
		}
	}

	static propTypes = {
		name: PropTypes.string,
		defaultChecked: PropTypes.bool,
		disabled: PropTypes.bool,
		onChange: PropTypes.func
	}

	static defaultProps = {
		name: 'switch',
        defaultChecked: false,
		disabled: false,
		onChange: null
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.defaultChecked !== nextProps.defaultChecked) {
			this.setState({
                checked: nextProps.defaultChecked
			});
		}
	}

	onChange(e) {
		if(this.props.disabled == false) {
			this.setState( { checked: !this.state.checked } );
			'function' === typeof this.props.onChange &&
				this.props.onChange(e);
		}
	}


	render() {
		const { name, disabled, ...others } = this.props;

		return(
			<label className="fm-switch">
				<input type="checkbox"
				       name={name}
				       disabled={disabled}
				       className="fm-switch-checkbox"
				       checked={this.state.checked}
				       onChange={(e) => this.onChange(e)}/>
				<div className="fm-switch-label"></div>
			</label>
		)
	}
}