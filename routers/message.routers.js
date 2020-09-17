// VARIABLES
const express = require('express');
const router = express.Router();
// END VARIABLES 


// ROAD MESSAGE MANAGEMENT
router.get('/message', (req, res) => {
    console.log('GET /message');
    res.render('message');
})
// END ROAD MESSAGE MANAGEMENT



module.exports = router;