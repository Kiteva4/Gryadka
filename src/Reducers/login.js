import {REQUEST_TO_LOGIN, LOGIN_IS_SUCSESS, LOGIN_IS_FAILURE} from '../Actions/types'

import login from '../Login/SourceLogin'

const initialLoginState = {
    refresh_token: null,
    access_token: null,
    expires: 0,
    webview_source: null,
};

const loginReducer = (state = initialLoginState, action) => {
    switch(action.type) {
    case REQUEST_TO_LOGIN:
        return {
            ...state,
            webview_source: login.GetCorrectSource(),
        };
    case LOGIN_IS_SUCSESS:
        return {
            ...state,
            refresh_token: action.payload.refresh_token,
            access_token: action.payload.access_token,
            expires: action.payload.expires,
            webview_source: null,
        };
    case LOGIN_IS_FAILURE:
        return {
            ...state,
            webview_source: login.GetErrorSource(action.payload),
        };
    default:
        return state;
    }
}
  
export default loginReducer;