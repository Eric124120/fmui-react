/**
 * Created by huangchengwen on 17/4/13.
 */
import { Component } from 'react'
import Button from '../../../packages/button'
import { Flex } from '../../../packages/flex'
import PopupModal from '../../../packages/popupModal'

export default class DemoPopupModal extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			show: false
		}
	}

	componentDidMount() {


	}

	componentWillUnmount() {

	}

	handle() {
		this.setState({
			show: true
		})
	}

	onCancelModal() {
		this.setState({
			show: false
		})
	}


	render() {

		const style = {
			margin: '20px 0',
			width: '100%',
			height: '100',
			border: '1px solid #c6c6c6',
			resize: 'none'
		}


		return(
			<div>
				<Flex>
					<Button size="large"
					        type="white-orange"
					        onClick={this.handle.bind(this)}>
						PopupModal
					</Button>
				</Flex>
				<PopupModal className="ui-cancel-modal"
				            title='标题1'
				            show={this.state.show}
				            onCancelPopup={ this.onCancelModal.bind(this) }
				>
					<textarea name="textarea"
					          style={style}/>
					<Button size="large"
					        type="white-orange"
					        onClick={this.onCancelModal.bind(this)}>
						提交
					</Button>
				</PopupModal>
			</div>

		)
	}
}