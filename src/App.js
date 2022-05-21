// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FixedNavbarExample from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    
    <Router>

<FixedNavbarExample />
     <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path="/Signup"  component={Signup} />
        <Route exact path="/Login"  component={Login} />
      </Switch>
    </Router>
    
  );
}

export default App;
