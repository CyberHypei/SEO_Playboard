import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const demos = {
  soundcloud:
    '<iframe width="100%" height="700" scrolling="yes" frameborder="yes" src="https://www.flipkart.com/" header></iframe>'
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact/>
        </Switch>
        <h1>Welcome Aboard!</h1>
        <div className="Split_frame">
          <h1>Split Window to inspect product</h1>
          <Iframe iframe={demos["soundcloud"]} />,
        </div>
      </Router>
      
    </>
  );
}

export default App;
