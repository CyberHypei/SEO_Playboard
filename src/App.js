import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact/>
        </Switch>
        <h1>Welcome Aboard!</h1>
      </Router>
      
    </>
  );
}

export default App;
