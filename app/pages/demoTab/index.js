/**
 * Created by huangchengwen on 17/1/15.
 */
/**
 * Created by huangchengwen on 17/1/4.
 */
import Tab from '../../../packages/tab'
import './tab.scss'

export default class DemoFlex extends React.Component {
	constructor(prop){
		super(prop)

	}

	render() {

		return(
				<Tab>
					<div type="content" name="tab一">
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
						<div className="list-item">内容一</div>
					</div>
					<div type="content" name="tab二">
						<div className="list-item">内容二</div>
					</div>
					<div type="content" name="tab三">
						<div className="list-item">内容三</div>
					</div>
				</Tab>
		)
	}
}