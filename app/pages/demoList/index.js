/**
 * Created by huangchengwen on 16/12/28.
 */
import { Component, PropTypes } from 'react'
import { Link } from 'react-router'


export default class DemoList extends Component {
	static propTypes = {
		items: PropTypes.array
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
			{ toUrl: '/popupmodal', titleTxt: 'popupmodal' },
			{ toUrl: '/cell', titleTxt: 'cell' },
			{ toUrl: '/validate', titleTxt: 'validate' },
			{ toUrl: '/tab', titleTxt: 'tab' },
			{ toUrl: '/tabsNavBar', titleTxt: 'tabsNavBar' },
			{ toUrl: '/header', titleTxt: 'header' }
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

