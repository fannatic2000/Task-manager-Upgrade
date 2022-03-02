import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
  showContentMenus = (routes) => {
    const routeList = routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    ))

    return (
      <Switch>
        { routeList }
      </Switch>
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu />

          { this.showContentMenus(routes) }
          
        </div>
      </Router>
    );
  }
}

export default App;
