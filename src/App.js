import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";

const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<div>
				<Router history={history}>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/productdetail" component={ProductDetail} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
