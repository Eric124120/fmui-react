/**
 * Created by huangchengwen on 16/12/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, Redirect} from 'react-router'

import Button from './pages/button'
import DemoList from './pages/demoList'
import DemeToast from './pages/demoToast'

ReactDom.render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={ DemoList }></Route>
			<Route path="/button" component={ Button }/>
			<Route path="/toast" component={ DemeToast }/>
		</Router>
	),
	document.getElementById('app')
);