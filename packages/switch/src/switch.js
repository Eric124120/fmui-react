/**
 * Created by huangchengwen on 16/12/31.
 */
import { Component, PropTypes } from 'react';
import './switch.scss'

export default class Switch extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			checked: false
		}
	}

	static propTypes = {
		name: PropTypes.string,
		disabled: PropTypes.bool,
		onChange: PropTypes.fun
	}

	static defaultProps = {
		name: 'switch',
		disabled: false,
		onChange: null
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