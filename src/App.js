
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Page from './components/Page/Page';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/orderreview">
            <OrderReview />
          </Route>
          <Route path ="/placeorder">
            <PlaceOrder/>
          </Route>
          <Route path="*">
            <Page></Page>
          </Route>
          
        </Switch>
      </Router>


    </div>
  );
}

export default App;
