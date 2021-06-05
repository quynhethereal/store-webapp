import './App.css';

import { HomePage } from './pages/homepage/homepage.component';

import { Link, Switch, Route } from 'react-router-dom';

const HatsPage = () => <h1>HATS</h1>;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
