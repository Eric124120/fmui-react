/**
 * Created by huangchengwen on 17/1/4.
 */
import Flex from '../../../packages/flex'

const FlexItem = Flex.FlexItem;

export default class DemoFlex extends React.Component {
	constructor(prop){
		super(prop)
	}

	render() {

		return(
			<Flex>
				<FlexItem>
					<div>1</div>
				</FlexItem>
				<FlexItem>
					<div>2</div>
				</FlexItem>
			</Flex>
		)
	}
}