const express = require("express");
const router =  express.Router();

// Middleware
const keycloak = require("#middlewares/keycloak");
router.use(keycloak.middleware());

// Fake Data
const menuItems = [
  {
    name: "Croissant",
    price: "$1",
    onMenu: true
  },
  {
    name:"Latte",
    price: "$5",
    onMenu: true
  },
  {
    name: "Roti Canai",
    price: "$0.50",
    onMenu: true
  },
  {
    name: "Hot Chocolate",
    price: "$5",
    onMenu: false
  },
  {
    name: "Satay",
    price: "$8",
    onMenu: false
  },
  {
    name: "Pad Thai",
    price: "$7",
    onMenu: false
  }
];

// router.get('/menu-items', keycloak.protect(), function (req, res) {
//   res.json({
//     result: "Hello World",
//     event: '1. Access granted to Default Resource\n'
//   })
// })

// Route open to any role
router.get("/menu-items", 
[keycloak.protect()],
async ( req, res, next) => {
  try {
    let filtered = menuItems.filter(item => {
      if (item.onMenu === true) {
        return item;
      }
    });

    // Return filtered data
    res.json(filtered);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;