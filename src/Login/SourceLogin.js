import server_data from '../Data/ServerData.json'

const url_auth = [
    'https://' + server_data.domain + '/oauth/authorize/?client_id=' + server_data.client_id,
    'https://' + server_data.domain + '/oauth/authorize/?state=&client_id=l' + server_data.client_id,
    'https://' + server_data.domain + '/oauth/authorize/?client_id=l' + server_data.client_id + "&state="
]

const url_token = 'https://' + server_data.domain + '/oauth/token/?grant_type=authorization_code&client_id=' +
server_data.client_id + '&client_secret=' + server_data.client_secret + '&code='

const GetAuthUrl = (index) => {
    return url_auth[index];
}

const android_url = "file:///android_asset/NotFound.html"
const source_error = Platform.OS === 'ios' 
  ? require('../assets/NotFound.html') 
  : { uri: android_url }

class SourceLoginBirtix {
    _current_url_auth = 0;

    GetCorrectSource = () => {
        return {
            source: {
              uri: GetAuthUrl(_current_url_auth++ % url_auth.length),
            },
        }
    }

    GetErrorSource = error => {
        return {
            source: source_error,
        }
    }

    GetUrlTocken = () => {
        return url_token;
    }

    GetRedirectUrl = () => {
        return server_data.redirect_url;
    }
}

const login = new SourceLoginBirtix();

export default login;