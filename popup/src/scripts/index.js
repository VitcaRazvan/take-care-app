/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React from 'react';

import {render} from 'react-dom';
import App from './components/app/App';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({portName: 'take-care'});

render(
    <Provider store={proxyStore}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
