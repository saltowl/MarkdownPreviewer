import {combineReducers} from 'redux';
import * as constants from '../constants';

function rootReducer(state = constants.INITIAL_STATE, action = {'type': 'default'}) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case constants.HANDLE_INPUT_CHANGE:
            newState.input = action.input;
            return newState;
        case constants.MAXIMIZE_EDITOR:
            newState.editorMaximized = true;
            return newState;
        case constants.MAXIMIZE_PREVIEW:
            newState.previewMaximized = true;
            return newState;
        default:
            return state;
    }
}

const reducers = combineReducers({rootReducer});

export default reducers;