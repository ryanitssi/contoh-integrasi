import Keycloak from 'keycloak-js';

let initOptions = {
    url: 'https://sso.infoglobal.id:8443/',
    realm: 'nodejs-example', 
    clientId: 'vue-connect'
}

const keycloakInstance = new Keycloak(initOptions);

const LogInInit = (loginCallback) => {
    keycloakInstance.init({ onLoad: 'login-required' })
        .then((authenticated) => {
            authenticated ? loginCallback() : alert("non authenticated");
        })
        .catch((e) => {
            console.log('MASUK CATCH')
            console.log(e);
            alert('ERROR');
        })
}

const UserName = () =>
    keycloakInstance?.tokenParsed?.preferred_username;
  
const Token = () => keycloakInstance?.token;

const LogIn = () => keycloakInstance.login();

const LogOut = () => keycloakInstance.logout();
  
const Authenticated = () => keycloakInstance.authenticated === undefined ? false : keycloakInstance.authenticated;

const KeyCloakService = {
    CallLoginInit: LogInInit,
    CallLogin: LogIn,
    GetUserName: UserName,
    GetAccesToken: Token,
    CallLogOut: LogOut,
    IsAuthenticated: Authenticated
};

export default KeyCloakService;