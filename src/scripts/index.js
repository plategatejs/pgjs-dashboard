'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from './dashboard';
import reducer from './reducers';

const store = createStore(reducer);
const root = document.getElementsByTagName('root')[0];
ReactDOM.render(<Provider store={store}><Dashboard/></Provider>, root);
