//引入react框架
	import React from 'react'
//引入react-dom模块
	import { render } from 'react-dom'
// 引入React-Router模块 
import { Route,BrowserRouter as Router,HashRouter,Link} from 'react-router-dom'
	//import { Route,HashRouter} from 'react-router'
//import Index from './components/index';
import Main from './components/main';
import example from './components/demo';
import createHashHistory from 'history/createHashHistory';//新版的react-router 的 hashHistory 已经没有了
import createBrowserHistory from 'history/createBrowserHistory';//新版的react-router 的 hashHistory 已经没有了
import createMemoryHistory from 'history/createMemoryHistory';//新版的react-router 的 hashHistory 已经没有了
//import '';

const App = () =>{
	return (
		<Router>
			<div>
				<Route component={Main} />
				<Route path="/example" component={example} />
    		</div>			
		</Router>
		// <BrowserRouter basename="/">
			
		// 	<Route path="/main" component={Main}/> 
		// </BrowserRouter>
		// <Route path="/example" component={example} />
		)
}

render((<App />),document.getElementById('app'))
// render((<Router>
// 				  <Route path="/" component={Index}>
// 				    <IndexRoute component={Main}/>
				   
// 				    <Route path="main" component={Main}/>
// 				  </Route>
// 				</Router>
// 	),document.getElementById('app'))