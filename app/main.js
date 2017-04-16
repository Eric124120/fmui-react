/**
 * Created by huangchengwen on 16/12/26.
 */

const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;

const rootRouter = [
	{
		path: '/',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoList'))
			}, 'DemoList')
		}
	}, {
		path: '/button',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/button'))
			}, 'DemoButton')
		}
	}, {
		path: '/actionsheet',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoActionSheet'))
			}, 'DemoActionsheet')
		}
	}, {
		path: '/popupmodal',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoPopupModal'))
			}, 'DemoPopupModal')
		}
	}, {
		path: '/checkbox',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoCheckbox'))
			}, 'DemoCheckbox')
		}
	}, {
		path: '/flex',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoFlex'))
			}, 'DemoFlex')
		}
	}, {
		path: '/cell',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoCell'))
			}, 'DemoCell')
		}
	}, {
		path: '/validate',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoValidate'))
			}, 'DemoValidate')
		}
	}, {
		path: '/modal',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoModal'))
			}, 'DemoModal')
		}
	}, {
		path: '/search',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoSearch'))
			}, 'DemoSearch')
		}
	}, {
		path: '/switch',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoSwitch'))
			}, 'DemoSwitch')
		}
	}, {
		path: '/toast',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoToast'))
			}, 'DemoToast')
		}
	}, {
		path: '/tab',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/demoTab'))
			}, 'DemoTab')
		}
	}

]

ReactDOM.render(
	(
		<Router history={hashHistory} routes={ rootRouter }></Router>
	),
	document.getElementById('app')
);
