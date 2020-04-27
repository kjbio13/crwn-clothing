import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/header/header.component'

//styles
import './App.css';

//pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//utilities
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

///Extend Component from React
class App extends Component {
  //call constructor with super() -- which allows us to use the this.state
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //the default should be unsubscribe from Auth == null
  unsubscribeFromAuth = null;

  //componentDidMount is a lifecylce of React -- anything that happens within this will run after the render as mounted - appeared 
  componentDidMount() {

    ///////////////////SIGN IN BY GOOGLE using .onAuthStateChanged()//////////////////////////////////
    //calling auth from firebase.util -- within has the method .onAuthStateChanged -- setting the state for the user that logged in via Google
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      //if userAuth is not null -- if signing in -- using onAuthStateChanged when logging in via Google, userAuth object will trigger
      if (userAuth) {

        //we get the reference from the userAuth object being passed in via createUserProfileDocument - a method create in firebase.util
        const userRef = await createUserProfileDocument(userAuth);

        // check snapshop if user exists -- userRef is returned from createUserProfile()
        //Use snapshots to get the data using onSnapShot() -- since we should be doing all back end stuff in the backend via firebase.util
        //create a snapShot object
        userRef.onSnapshot(snapShot => {
          //use .data() to get the properties we got from createUserProfile()

          //the id is in the snapShot but not in .data()
          console.log(snapShot.data());

          //set the current user in the state
          this.setState({
            currentUser: {
              id: snapShot.id,
              //... (ellipses) adds all the object properties we got
              ...snapShot.data()
            }
          }, () => console.log(this.state));

        })
      } else {
        //userAuth is null 
        this.setState({
          currentUser: userAuth
        })
      }




      // this.setState({ currentUser: user });

      // //import the constant from firebase util, and pass the user
      // createUserProfileDocument(user);
      // console.log(user);

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>

    );
  }
}

export default App;
