/**
 * Created by huangchengwen on 16/12/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Button from './pages/button'
import { Router, Route, hashHistory } from 'react-router'


ReactDom.render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={ Button }/>
		</Router>
	),
	document.getElementById('app')
);