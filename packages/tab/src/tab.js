import Search from '../../search'
import './tab.scss'

export default class Tab extends React.Component {
	constructor(prop) {
		super(prop)

		this.state = {
			currentIndex: 0
		}

	}

	static defaultProps = {
		searchHandle: null
	}

	handlSelect(currentIndex) {
		this.setState({
			currentIndex: currentIndex
		})
	}

	titleCls(index) {
		return index === this.state.currentIndex ?
				'ml-tab-title-item selected' :
				"ml-tab-title-item";
	}

	itemCls(index) {
		return index === this.state.currentIndex ?
				'ml-tab-content-item selected' :
				"ml-tab-content-item";
	}

	render() {

		const {index, searchHandle, children, ...others} = this.props;


		return(
			<div className="ml-tab" {...others} index={index}>
				<div className="ml-tab-title">
					{children.map( (title, idx) => {
						return(
							<div key={"title_" + idx} className={this.titleCls(idx)} onClick={this.handlSelect.bind(this, idx)}>
								{title.props.name}
							</div>
						)
					})}
				</div>
				{
					searchHandle &&
					<Search searchSubmit={searchHandle}/>
				}
				<div className="ml-tab-content">
					{children.map( (item, idx) => {
						return(
							<div key={"content_" + idx} className={this.itemCls(idx)}>
								{item}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}