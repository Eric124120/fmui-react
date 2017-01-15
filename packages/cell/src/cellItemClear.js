/**
 * Created by huangchengwen on 17/1/9.
 */
/**
 * Created by huangchengwen on 17/1/9.
 */
export default class CellItemClear extends React.Component {
	constructor(prop){
		super(prop)
	}


	static defaultProps = {
		Component: 'div'
	}


	render() {
		const {Component, ...others} = this.props;

		return(
			<Component className="ml-list-clear" {...others}>
				<span className="ml-icon-clear"></span>
			</Component>
		)
	}
}