import './App.scss';
import { Route, Switch } from "react-router-dom";
import { routes } from './pages/routes';
import { Converter } from './pages/Converter/Converter';

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map(route => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </div>
  );
}

export default App;
