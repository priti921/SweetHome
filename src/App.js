import './App.css';
import Navbar from './components/Navbar';
import main from './css/main.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
