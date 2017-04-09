/**
 * Created by huangchengwen on 16/12/28.
 */
const Link = ReactRouter.Link

export default class DemoList extends React.Component {
	static propTypes = {
		items: React.PropTypes.array
	};

	static defaultProps = {
		items: [
			{ toUrl: '/toast', titleTxt: 'toast' },
			{ toUrl: '/button', titleTxt: 'button' },
			{ toUrl: '/checkbox', titleTxt: 'checkbox' },
			{ toUrl: '/switch', titleTxt: 'switch' },
			{ toUrl: '/modal', titleTxt: 'modal' },
			{ toUrl: '/search', titleTxt: 'search' },
			{ toUrl: '/flex', titleTxt: 'flex' },
			{ toUrl: '/actionsheet', titleTxt: 'actionsheet' },
			{ toUrl: '/form', titleTxt: 'form' },
			{ toUrl: '/tab', titleTxt: 'tab' }
		]
	};

	render() {
		return (
			<div className="fm-list">
				{
					this.props.items.map(function (item, key) {
						return (
							<Link key={ key } to={ item.toUrl } className="fm-list-item">
								<div className="fm-list-content">{ item.titleTxt }</div>
								<div className="fm-list-arrow">
									<span className="fm-icon-arrow-right"></span>
								</div>
							</Link>
						)
					})
				}
			</div>
		)
	}
}

