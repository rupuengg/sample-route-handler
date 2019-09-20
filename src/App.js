import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

import AdminRoutes from './routes/AdminRoutes';
import EmployeeRoutes from './routes/EmployeeRoutes';

import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route path="/admin" component={AdminRoutes} />
            <Route path="/employee" component={EmployeeRoutes} />
            <Route exact path="*" component={Error} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;