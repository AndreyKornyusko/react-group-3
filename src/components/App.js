import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Title from './Title';
import Nav from './Nav';
import HomePage from '../pages/HomePage';
import ArticlesPage from '../pages/ArticlesPage';
import ArticlePage from '../pages/ArticlePage';
import AboutPage from '../pages/AboutPage';
import NotFound from '../pages/NotFoundPage';

const App = () => (
  <>
    <Title text="React Router Basics" />
    <Nav />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/articles" component={ArticlesPage} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
