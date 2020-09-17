// VARIABLES
const express = require('express');
const router = express.Router();
// END VARIABLES 


// ROAD CITY MANAGEMENT
router.get('/city', (req, res) => {
    console.log('GET /city');
    res.render('city');
})
// END ROAD CITY MANAGEMENT



module.exports = router;