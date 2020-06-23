import {REQUEST_LOGIN, LOGIN_SUCSESS, LOGIN_FAILURE} from './types'
import login from '../Login/SourceLogin'
import GetParamsUrlGetRequest from '../ParamsUrlGetRequest'

export const request_login = () => {
    return {
        type: REQUEST_LOGIN,
    }
}

export const navigation_state_change = url => {
    return dispatch => {
        const regex_url = new RegExp(login.GetRedirectUrl(), "g")
        const oauth_with_other_url = /https:\/\/auth2.bitrix24.net\/bitrix\/tools\/oauth\/.+code=/g;

        
        if (regex_url.exec(url)) {
            //this.webview.stopLoading();

            const params = GetParamsUrlGetRequest(url)

            fetch(login.GetUrlTocken() + params['code'])
                .then(response => response.json())
                .then(json => dispatch(login_sucsess(json)))
                .catch(error => dispatch(login_failure(error)))
        } 
        else if (oauth_with_other_url.exec(url)) {
            setTimeout(() => dispatch(request_login()), 1000);
        }
    }
}

export const login_sucsess = tokens_and_data => {
    return {
        type: LOGIN_SUCSESS,
        payload: tokens_and_data,
    }
}

export const login_failure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}