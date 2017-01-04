/**
 * Created by huangchengwen on 17/1/1.
 */
import React from 'react'
import Checkbox from './checkbox'

export default class agreeItem extends React.Component {
	constructor(prop) {
		super(prop);
	}

	static defaultProps = {
		linkArray: []
	}

	static propTypes = {
		linkArray: React.PropTypes.array
	}

	render() {

		return(
			<label className="ml-list-item">
				<Checkbox type="checkbox" label="同意" checked={true}></Checkbox>
				{
					this.props.linkArray.map(function (item, key) {
						return(
							<a key={key} href={item.url} target="_blank" style={{marginLeft: "5px", fontSize: "14px"}}>{item.text}</a>
						)
					})
				}
			</label>
		)
	}
}