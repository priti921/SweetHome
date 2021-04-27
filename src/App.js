import Navbar from './components/Navbar';
import './css/main.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'
import cakes from './pages/cakes';
import aboutUs from './pages/aboutUs';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/SweetHome/' component={home}/>
          <Route path='/cakes' component={cakes}/>
          <Route path='/about-us'component={aboutUs}/>
        </Switch>

      </Router>
    </div>
    
  ); 
}

export default App;
