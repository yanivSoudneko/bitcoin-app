import { HashRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import { ContactEdit } from './Pages/ContactEdit';
import {ContactDetails} from './Pages/ContactDetails/ContactDetails';
import { connect } from 'react-redux';
import { AppHeader } from './Cmps/AppHeader/AppHeader';
import { StatisticPage } from './Pages/StatisticPage';
import { signup } from './Cmps/signup/signup';

import './App.css';


export function _App({user}) {

  
 
  const PrivateRoute = (props) => {
    return user ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
  } 

  
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
           <Route component={signup}  path='/signup' />
           
          <PrivateRoute component={ContactEdit}  path='/contact/edit/:id?' />

          <PrivateRoute component={ContactDetails}  path='/contact/:id' />

          <PrivateRoute component={StatisticPage}  path='/statistic' />

          <PrivateRoute component={ContactPage}  path='/contact' />


          <PrivateRoute component={HomePage}  path='/' />


        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state =>({
  user:state.userReducer.user
})



export const App = connect(mapStateToProps)(_App)
