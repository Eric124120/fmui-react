/**
 * Created by huangchengwen on 17/1/9.
 */
export default class CellFooter extends React.Component {
	constructor(prop){
		super(prop)
	}

	static defaultProps = {
		Component: 'div'
	}

	render() {
		const {children, Component, ...others} = this.props;
		return(
				<Component className="ml-list-footer" {...others}>
					{ children }
				</Component>
		)
	}
}