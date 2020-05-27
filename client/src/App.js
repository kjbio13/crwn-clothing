import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//redux
import { connect } from 'react-redux';

//redux actions
// import { setCurrentUserAction } from './redux/user/user.actions';

//selectors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

//components
import Header from './components/header/header.component';

//styles
import './App.css';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

//utilities
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { checkUserSession } from './redux/user/user.actions'

///Extend Component from React
const App = ({ checkUserSession, currentUser }) => {

  // unsubscribeFromAuth = null;

  // componentDidMount() {


  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />

        <Route exact path="/signin" render={
          () => currentUser ?
            (
              <Redirect to="/" />
            )
            :
            (

              <SignInAndSignUpPage />
            )
        } />
      </Switch>
    </div>

  );
}


//mapping state to props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


//dispatching props to action
const mapDispatchToProps = dispatch => ({
  // setCurrentUserProp: user => dispatch(setCurrentUserAction(user))
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
