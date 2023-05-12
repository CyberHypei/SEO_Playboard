import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component= { HomePage } />
          <Route path="/services" component= { Services } />
          <Route path="/login" component= { LoginPage } />
          <Route path="/register" component= { RegisterPage } />
        </Switch>
      </Router> 
    </>
  );
}

export default App;
