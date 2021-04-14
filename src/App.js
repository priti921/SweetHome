import Navbar from './components/Navbar';
import './css/main.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' component={home}/>
        </Switch>

      </Router>
    </div>
    
  );
}

export default App;
