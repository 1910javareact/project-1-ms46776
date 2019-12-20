import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login-components/LoginContainer';
import B99Nav from './components/nav-bar/NavBar';
import { Provider } from 'react-redux';
import { store } from './Store'
import UserDisplay from './components/user-component/UserDisplayContainer';
import ReimDisplay from './components/reimbursement-components/ReimbursementContainer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <nav>
            <B99Nav />
          </nav>
          <header className='App-header'>
            <Switch>
              <Route path='/user' component={UserDisplay} />
              <Route path='/reimbursement' component={ReimDisplay} />
              <Route path='/' component={Login} />
            </Switch>
          </header>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
