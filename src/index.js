import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Login from './components/login';
import SearchPlanet from './components/search_planets';

import rootReducer from './reducers/index';
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <div>
   <Switch>
      <Route path="/planets" component={SearchPlanet}/>
     <Route path ="/" component={Login} />
   </Switch>
   </div>
 </BrowserRouter>
  </Provider>
  , document.getElementById('container'));
