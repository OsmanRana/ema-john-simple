
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path ="/">
            <Shop />
          </Route>
          <Route path ="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
