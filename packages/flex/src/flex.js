/**
 * Created by huangchengwen on 17/1/4.
 */
import { Component } from 'react';
import classNames from 'classnames';

export default class Flex extends Component {
	constructor(prop){
		super(prop)

	}

	render() {
		const { className, ...props} = this.props;
		let cls = classNames({
			['fm-flexbox']: true,
			[className]: !!className
		});
		return(
			<div className={cls} {...props}>
				{ props.children }
			</div>
		)
	}
}