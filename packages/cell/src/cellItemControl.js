/**
 * Created by huangchengwen on 17/1/9.
 */
import { Component } from 'react';
import cx from 'classnames';

export default class CellItemControl extends Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {children, Component, className, ...others} = this.props;
		const cls = cx({
			"fm-list-control": true,
			[className]: !!className
		});

		return(
				<Component className={ cls } {...others}>
					{ children }
				</Component>
		)
	}
}