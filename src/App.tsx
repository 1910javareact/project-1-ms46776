import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login-components/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import UserInfoComponent from './components/user-component/UserDisplayContainer';
import ReimbursementInfoComponent from './components/reimbursement-components/ReimbursementContainer';
import AllUsersComponent from './components/user-component/AllUserContainer';
import UserByIdComponent from './components/user-component/UserByIdDisplayContainer';
import ReimbursementByStatusIdComponent from './components/reimbursement-components/ReimbursementByStatusIdContainer';
import ReimbursementByUserIdComponent from './components/reimbursement-components/ReimbursementByUserIdContainer';
import { UpdateUserComponent } from './components/user-component/UserUpdateComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/user' component={AllUsersComponent} />
            <Route path='/user' component={UserInfoComponent} />
            <Route path='/userbyid' component={UserByIdComponent} />
            <Route path='/updateuser' component={UpdateUserComponent} />
            <Route path='/reimbursements/status' component={ReimbursementByStatusIdComponent} />
            <Route path='/reimbursements/user' component={ReimbursementByUserIdComponent} />
            <Route path='/reimbursements' component={ReimbursementInfoComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/'>
              <LoginComponent />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;