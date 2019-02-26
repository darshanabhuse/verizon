import {APP_ID_DEFINED, APP_ID_NOTDEFINED} from './Actions';

function App_id_notdefined (app_id_value) {
    return {
        type : "APP_ID_NOTDEFINED",
        data : 0
    }
}

function App_id_defined (app_id_value) {
    return {
        type: "APP_ID_DEFINED",
        data : app_id_value
    }
}

export function signin(data) {
    return function (dispatch) {
        responseData = data;
        dispatch(App_id_defined(responseData));
    }
}