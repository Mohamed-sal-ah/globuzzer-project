import React from 'react'
import { withAuthentication } from '../Session';
import { Switch, Route } from 'react-router-dom';
import Notes from '../Notes';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import * as ROUTES from '../../constants/routes'
import './style.css'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const App = () => (
  <Route render={({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={2000}
        classNames="fade"
      >
        <Switch location={location}>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.NOTES_LIST} component={Notes} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )} />
)


export default withAuthentication(App)