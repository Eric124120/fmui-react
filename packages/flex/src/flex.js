/**
 * Created by huangchengwen on 17/1/4.
 */
export default class Flex extends React.Component {
	constructor(prop){
		super(prop)

	}

	render() {
		const props = this.props;
		return(
			<div className="ml-flexbox" {...props}>
				{ props.children }
			</div>
		)
	}
}