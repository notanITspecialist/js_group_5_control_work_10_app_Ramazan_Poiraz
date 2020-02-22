
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "reactstrap/es/Container";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/postsReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <BrowserRouter>
        <Container>
            <Provider store={store}>
                <App />
            </Provider>
        </Container>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
