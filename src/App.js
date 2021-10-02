
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
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
          <Route path = "/orderreview">
            <OrderReview />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
