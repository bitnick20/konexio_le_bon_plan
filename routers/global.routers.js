// VARIABLES
const express = require('express');
const router = express.Router();
// END VARIABLES 


// ROAD GLOBAL MANAGEMENT
router.get('/', (req, res) => {
    console.log('GET /');
    res.render('home');
})
// END ROAD GLOBAL MANAGEMENT


// ERROR 404 MANAGEMENT
router.use((req, res, next) => {
    res.status(404).send('Page non trouvée');
});
// END ERROR 404 MANAGEMENT


// ALL ERROR MANAGEMENT
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Quelque chose s'est mal passé !");
});
// END ALL ERROR MANAGEMENT


module.exports = router;