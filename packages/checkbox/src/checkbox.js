/**
 * Created by huangchengwen on 17/1/1.
 */
import './checkbox.scss'

export default class Checkbox extends React.Component {
	constructor(prop) {
		super(prop);
	}

	static propTypes = {
		type: React.PropTypes.oneOf(['radio', 'checkbox']),
		stylesheet: React.PropTypes.oneOf(['normal', 'rect', 'protocol']),
		name: React.PropTypes.string,
		checkboxVal: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		checked: React.PropTypes.bool,
		label: React.PropTypes.string
	}

	static defaultProps = {
		type: 'checkbox',
		stylesheet: 'normal',
		name: 'checkbox',
		checkboxVal: '',
		disabled: false,
		checked: false,
		label: null
	}

	render() {
		var { type, stylesheet, name, checkboxVal, disabled, checked, label, ...others } = this.props;
		const labelDOM = label && stylesheet != 'rect' ? <label className="ml-checkbox-label">{label}</label> : '';

		return(
			<div className="ml-checkbox" {...others}>
				<input type={type}
				       name={name}
				       value={checkboxVal}
				       disabled={disabled}
				       defaultChecked={checked}/>
				<span className={ "ml-" + stylesheet +"-checkbox" }>{stylesheet == 'rect' ? label : ''}</span>
				{labelDOM}
			</div>
		)
	}
}