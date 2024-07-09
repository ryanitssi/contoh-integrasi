const express = require("express");
const router =  express.Router();

// Middleware
const keycloak = require("#middlewares/keycloak");
const extractToken = require("#middlewares/extractToken");
router.use(keycloak.middleware());

const personel = [
    {
        tlc: "admin",
        name: "Administrator",
    },
    {
        tlc: "ari",
        name: "Ariyanto",
    },
    {
        tlc: "ryt",
        name: "Ariyanto Adi Nugroho",
    },
    {
        tlc: "dic",
        name: "Dicky Firmansyah",
    },
    {
        tlc: "avn",
        name: "Avan Kurniawan",
    },
    {
        tlc: "csi",
        name: "Candra Siswa",
    },
  ];

router.get("/info", 
    [keycloak.protect(), extractToken],
    async ( req, res, next) => {
        let filtered = personel.filter(item => {
            if (item.tlc === req.tokenData.preferred_username) {
              return item;
            }
          });
        res.json(filtered);
});


module.exports = router;  