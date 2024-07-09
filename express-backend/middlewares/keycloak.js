const Keycloak = require("keycloak-connect");
const dotenv = require('dotenv').config();

const config = {
  "realm": "nodejs-example",
  "auth-server-url": "https://sso.infoglobal.id:8443/",
  "ssl-required": "external",
  "resource": "express-connect",
  "public-client": true,
  "confidential-port": 0,
 }

module.exports = new Keycloak({}, config);