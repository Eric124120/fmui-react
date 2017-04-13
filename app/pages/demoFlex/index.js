/**
 * Created by huangchengwen on 17/1/4.
 */
import { Component } from 'react'
import { Flex, FlexItem } from '../../../packages/flex'


export default class DemoFlex extends Component {
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