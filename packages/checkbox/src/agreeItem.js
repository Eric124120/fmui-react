/**
 * Created by huangchengwen on 17/1/1.
 */
import React, {Component, PropTypes} from 'react'
import Checkbox from './checkbox'

export default class agreeItem extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			checked: false
		}
	}

	static defaultProps = {
		linkArray: [],
		type: 'checkbox'
	}

	static propTypes = {
		linkArray: PropTypes.array,
		type: PropTypes.oneOf(['radio', 'checkbox'])
	}

	handleChange(e) {
		this.setState({
			checked: e.target.checked
		})
	}


	render() {

		const { type, linkArray } = this.props;

		return (
			<label className="fm-list-item">
				<Checkbox type={type}
				          label="同意"
				          checked={this.state.checked}
				          onChange={this.handleChange.bind(this)}/>
				{
					linkArray.map(function (item, key) {
						return (
							<a key={key} href={item.url} target="_blank"
							   style={{marginLeft: "5px", fontSize: "14px"}}>{item.text}</a>
						)
					})
				}
			</label>
		)
	}
}