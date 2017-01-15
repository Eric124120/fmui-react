/**
 * Created by huangchengwen on 17/1/9.
 */
export default class CellItemControl extends React.Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {children, Component, ...others} = this.props;

		return(
				<Component className="ml-list-control" {...others}>
					{ children }
				</Component>
		)
	}
}