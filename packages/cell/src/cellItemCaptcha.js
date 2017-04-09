/**
 * Created by huangchengwen on 17/1/9.
 */
import { Component } from 'react';

export default class CellItemCaptcha extends Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {children, Component, ...others} = this.props;
		return(
			<Component className="fm-list-captcha" {...others}>
				{children}
			</Component>
		)
	}
}