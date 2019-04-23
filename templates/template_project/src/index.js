import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer.js';
import thunk from 'redux-thunk';
import './index.scss';
import AppRouter from './screen/AppRouter';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import red from '@material-ui/core/es/colors/red';
import pink from '@material-ui/core/es/colors/pink';
import indigo from '@material-ui/core/es/colors/indigo';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const store = createStore(reducer, applyMiddleware(...middleware));

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
            <AppRouter />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
