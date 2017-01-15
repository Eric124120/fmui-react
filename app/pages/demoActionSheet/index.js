/**
 * Created by huangchengwen on 17/1/5.
 */
import Button from '../../../packages/button'
import Flex from '../../../packages/flex'
import ActionSheet from '../../../packages/actionsheet'

export default class DemoActionSheet extends React.Component {
	constructor(prop) {
		super(prop);

		this.state = {
			show: false
		}
	}

	componentDidMount() {
		/*初始化actionsheet*/
		const actionMenus = [
			{
				text: '选项一',
				current: true,
				onClick: function () {
					console.log('选项一');
				}
			},
			{
				text: '选项二',
				onClick: function () {
					console.log('选项二');
				}
			}
		]

		this.actionSheeet = ActionSheet.init('ActionSheet', actionMenus, function () {
			console.log('cancel')
		})
	}

	componentWillUnmount() {
		/*销毁actionsheeet*/
		this.actionSheeet.destroy();
	}

	handle() {
		/*显示actionsheeet*/
		this.actionSheeet.show();
	}


	render() {


		return(
			<div>
				<Flex>
					<Button size="large" type="white-orange" onClick={this.handle.bind(this)}>actionsheet</Button>
				</Flex>
			</div>

		)
	}
}