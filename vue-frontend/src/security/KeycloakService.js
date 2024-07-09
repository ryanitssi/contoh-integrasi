import Keycloak from 'keycloak-js';

let initOptions = {
    url: 'https://sso.infoglobal.id:8443/',
    realm: 'nodejs-example', 
    clientId: 'vue-connect'
}

const keycloakInstance = new Keycloak(initOptions);

const Init = (initCallback) => {
    keycloakInstance.init({onLoad: 'check-sso', checkLoginIframe: false}).then((auth) => {
        if (auth) {
            initCallback({
                authenticated: true,
                token: keycloakInstance.token,
                username: keycloakInstance.tokenParsed?.preferred_username,
                tokenParsed: keycloakInstance.tokenParsed
            })
        } else {
            initCallback({
                authenticated: false,
                token: '',
                username: '',
                tokenParsed: ''
            })
        }
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