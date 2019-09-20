import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthContext } from './providers/AuthProvider';
import Nav from './components/Nav';

import AdminRoutes from './routes/AdminRoutes';
import EmployeeRoutes from './routes/EmployeeRoutes';

import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  const context = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            {context.auth.isLoggedIn && context.auth.user.type === 'admin' && <Route path="/admin" component={AdminRoutes} />}
            {context.auth.isLoggedIn && context.auth.user.type === 'employee' && <Route path="/employee" component={EmployeeRoutes} />}
            <Route exact path="*" component={Error} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;