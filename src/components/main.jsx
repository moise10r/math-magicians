import { Route, Switch } from 'react-router-dom';
import Header from './header';
import CalculatorPage from './pages/calculatorPage';
import Home from './pages/home';

const Main = () => (
  <div className="main-home-container">
    <Header />
    <Switch>
      <Route path="/calculator" component={CalculatorPage} />
      <Route path="/" exact component={Home} />
    </Switch>
  </div>
);

export default Main;
