import Keycloak from 'keycloak-js';

let initOptions = {
    url: 'https://sso.infoglobal.id:8443/',
    realm: 'nodejs-example', 
    clientId: 'vue-connect'
}

const keycloakInstance = new Keycloak(initOptions);

const Init = (initCallback, refreshTokenCallback) => {
    keycloakInstance.init({onLoad: 'check-sso', checkLoginIframe: false}).then((auth) => {
        if (auth) {
            initCallback({
                authenticated: true,
                token: keycloakInstance.token,
                username: keycloakInstance.tokenParsed?.preferred_username,
                tokenParsed: keycloakInstance.tokenParsed,
                tokenValidity: Math.round((keycloakInstance.tokenParsed.exp + keycloakInstance.timeSkew - new Date().getTime() / 1000)/60) + ' minutes'
            })
        } else {
            initCallback({
                authenticated: false,
                token: '',
                username: '',
                tokenParsed: '',
                tokenValidity: ''
            })
        }

        setInterval(() =>{
            keycloakInstance.updateToken().then((refreshed)=>{
              if (refreshed) {
                refreshTokenCallback('Token refreshed'+ refreshed, keycloakInstance.token);
              } else {
                refreshTokenCallback('Token not refreshed, valid for '
                    + Math.round((keycloakInstance.tokenParsed.exp + keycloakInstance.timeSkew - new Date().getTime() / 1000)/60) + ' minutes',
                    keycloakInstance.token);
              }
            });
        }, 60000)
    });
}

const Login = () => {
    keycloakInstance.login()
}

const Logout = () => {
    keycloakInstance.logout()
}

const KeyCloakService = {
    CallInit: Init,
    CallLogin: Login,
    CallLogout: Logout
};

export default KeyCloakService;