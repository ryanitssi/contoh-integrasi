const Keycloak = require("keycloak-connect");

const config = {
  "realm": "infoglobal",
  "auth-server-url": "https://sso.infoglobal.id:8443/",
  "ssl-required": "external",
  "resource": "pandapa-backend",
 }

module.exports = new Keycloak({}, config);