import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import NavigationBar from './components/NavigationBar/NavigationBar';
import LogoParts from './components/LogoPart/LogoParts';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// IMPORT PAGES 
import Home from './Pages/Home/Home';

import Profile from './Pages/Profile/Profile';
import Director from './Pages/Director/Director';
import Faculty from './Pages/Faculty/Faculty';

import Course from './Pages/Course/Course';

import Management from './Pages/Management/Management';
import Facilities from './Pages/Facilities/Facilities';
import Placement from './Pages/Placement/Placement';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <LogoParts />
          <NavBar />
          <Route path="/" exact component={Home}/>
          <Route path="/profile/" exact component={Profile}/>
          <Route path="/director/" exact component={Director}/>
          <Route path="/faculty/" exact component={Faculty}/>
          <Route path="/course/" exact component={Course}/>
          <Route path='/management/' exact component={Management}/>
          <Route path='/facilities/' exact component={Facilities}/>
          <Route path='/placement/' exact component={Placement}/>
          <Route path='/gallery/' exact component={Gallery}/>
          <Route path='/contact/' exact component={Contact}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
