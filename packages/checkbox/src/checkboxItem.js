/**
 * Created by huangchengwen on 17/1/1.
 */
import { Component, PropTypes} from 'react';
import Checkbox from './checkbox'

export default class checkboxItem extends Component {
	constructor(prop) {
		super(prop);

		this.state = {

		}
	}

	static defaultProps = {
		type: 'checkbox',
		name: 'checkbox',
		checkboxVal: '',
		disabled: false,
		checked: false,
		content: ''
	}

	static propTypes = {
		type: PropTypes.string,
		name: PropTypes.string,
		checkboxVal: PropTypes.string,
		disabled: PropTypes.bool,
		checked: PropTypes.bool,
		content: PropTypes.string
	}

	render() {
		const { type, name, value, disabled, checked, content, ...others } = this.props;

		return(
			<label className="fm-list-item" {...others}>
				<div className="fm-list-content">{content}</div>
				<Checkbox type={type}
				          name={name}
				          value={value}
				          disabled={disabled}
				          checked={checked}/>
			</label>
		)
	}
}