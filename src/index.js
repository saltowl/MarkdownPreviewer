import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import * as constants from './constants';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const handleInputChange = (input) => {
    return {
        type: constants.HANDLE_INPUT_CHANGE,
        input: input
    };
};

const handleMaximizedEditor = () => {
    return {
        type: constants.MAXIMIZE_EDITOR
    };
};

const handleMaximizedPreview = () => {
    return {
        type: constants.MAXIMIZE_PREVIEW
    };
};

const mapStateToProps = (state) => {
    return {
        input: state.rootReducer.input,
        editorMaximized: state.rootReducer.editorMaximized,
        previewMaximized: state.rootReducer.previewMaximized
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: (input) => {
            dispatch(handleInputChange(input));
        },
        handleMaximizedEditor: () => {
            dispatch(handleMaximizedEditor());
        },
        handleMaximizedPreview: () => {
            dispatch(handleMaximizedPreview());
        }
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
