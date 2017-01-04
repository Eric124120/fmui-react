/**
 * Created by huangchengwen on 16/12/28.
 */
import React from 'react'
import { Link } from 'react-router'


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
			{ toUrl: '/flex', titleTxt: 'flex' }
		]
	};

	render() {
		return (
			<div className="ml-list">
				{
					this.props.items.map(function (item, key) {
						return (
							<Link key={ key } to={ item.toUrl } className="ml-list-item">
								<div className="ml-list-content">{ item.titleTxt }</div>
								<div className="ml-list-arrow">
									<span className="ml-icon-arrow-right"></span>
								</div>
							</Link>
						)
					})
				}
			</div>
		)
	}
}

