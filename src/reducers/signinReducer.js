import {APP_ID_DEFINED, APP_ID_NOTDEFINED} from '../actions/Actions';
const initialState = {
    data: ""
}


export function signinReducer (state = initialState, action) {
    switch (action.type) {
        case APP_ID_NOTDEFINED:
            return action.data;
            // return Object.assign({}, state, {
            //     app_id_value = 1
            // });
        case APP_ID_DEFINED:
            return action.data;
    }
    return state;
}