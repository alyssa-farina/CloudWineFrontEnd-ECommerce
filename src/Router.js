import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import CheckoutPage from './pages/checkout';
import OrdersPage from './pages/orderspage';
import SignUpPage from './pages/signuppage';
import LoginPage from './pages/loginpage';
import ProductsPage from './pages/productspage';
import ReturnsPage from './pages/returnspage';
import QuizPage from './quizpage';


const Router = () => (
  <Switch>
    <Route exact path="/" component={QuizPage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route path="/orders/:id" component={OrdersPage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/products" component={ProductsPage} />
    <Route exact path="/returns" component={ReturnsPage} />
  </Switch>
);

export default Router;
