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
        email: "admin@infoglobal.co.id",
        agama: "-"
    },
    {
        tlc: "ari",
        name: "Ariyanto",
        email: "ariyanto.nugroho@infoglobal.co.id",
        agama: "Islam"
    },
    {
        tlc: "ryt",
        name: "Ariyanto Adi Nugroho",
        email: "ariyanto.nugroho@infoglobal.co.id",
        agama: "Islam"
    },
    {
        tlc: "dic",
        name: "Dicky Firmansyah",
        email: "dicky.firmansyah@infoglobal.co.id",
        agama: "Islam"
    },
    {
        tlc: "avn",
        name: "Avan Kurniawan",
        email: "avan.kurniawan@infoglobal.co.id",
        agama: "Islam"
    },
    {
        tlc: "csi",
        name: "Candra Siswa",
        email: "candra.siswa@infoglobal.co.id",
        agama: "Islam"
    },
  ];

router.get("/info", 
    [keycloak.protect(), extractToken],
    async ( req, res, next) => {
        let result = {};
        let filtered = personel.filter(item => item.tlc === req.tokenData.preferred_username);
        if (filtered.length > 0)
            result = filtered[0];
        res.json(result);
});


module.exports = router;  