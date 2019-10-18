import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import CheckoutPage from './pages/checkout';
import OrdersPage from './pages/orderspage';
import SignUpPage from './pages/signuppage';
import LoginPage from './pages/loginpage';
import ProductsPage from './pages/productspage';
import QuizPage from './quizpage';
import WineQuizPage from './pages/winequizpage';
import WelcomePage from './pages/welcomepage';
import OfferPage from './pages/offerpage';
import eventspage from './pages/eventspage';
import aboutpage from './pages/aboutpage';
import Wineries from './pages/Wineries';

// import winelocations from './pages/winelocations';


const Router = () => (
  <Switch>
 
    <Route exact path="/" component={HomePage} />
    <Route exact path="/home" component={WelcomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route path="/orders/:id" component={OrdersPage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/products" component={ProductsPage} />
    <Route exact path="/winequiz" component={WineQuizPage} />
    <Route exact path="/events" component={eventspage} />
    <Route exact path="/offer" component={OfferPage} />
    <Route exact path="/about" component={aboutpage} />
    <Route exact path="/wineries" component={Wineries} />
   
  </Switch>
);

export default Router;
