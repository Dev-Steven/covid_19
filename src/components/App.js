import './style.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Global from './Global';
import Country from './Country';
import Live from './Live';
import history from '../history';

class App extends React.Component {
	render() {
		return (
			<div>
				<Router history={history}>
					<div>
						<NavBar />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/global' component={Global} />
							<Route path='/country' component={Country} />
							<Route path='/live' component={Live} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
