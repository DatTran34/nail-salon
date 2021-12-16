import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ServicePage from './pages/ServicePage/ServicePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div>
     <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/service" component={ServicePage}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
