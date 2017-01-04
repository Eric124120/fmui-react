/**
 * Created by huangchengwen on 16/12/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, Redirect} from 'react-router'

import Button from './pages/button'
import DemoList from './pages/demoList'
import DemeToast from './pages/demoToast'
import DemoSwitch from './pages/demoSwitch'
import DemoCheckbox from './pages/demoCheckbox'
import DemoModal from './pages/demoModal'
import DemoSearch from './pages/demoSearch'
import DemoFlex from './pages/demoFlex'

ReactDom.render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={ DemoList }></Route>
			<Route path="/button" component={ Button }/>
			<Route path="/toast" component={ DemeToast }/>
			<Route path='/switch' component={ DemoSwitch }/>
			<Route path='/checkbox' component={ DemoCheckbox }/>
			<Route path='/modal' component={ DemoModal }/>
			<Route path='/search' component={ DemoSearch }/>
			<Route path='/flex' component={ DemoFlex }/>
		</Router>
	),
	document.getElementById('app')
);