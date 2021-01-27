import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store'

import { theme } from "loft-taxi-mui-theme"
import { MuiThemeProvider } from "@material-ui/core/styles"

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <App isLoggedIn={true}/>
            </Provider>
        </MuiThemeProvider>,
    </BrowserRouter>,
    document.getElementById('root')
);


