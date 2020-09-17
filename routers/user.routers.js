const express = require('express');
const router = express.Router();
const multer = require('multer');
// END VARIABLES 



// CONFIG MULTER
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename : (req, file, cb) => {
        const date = new Date().toLocaleDateString();
        cb(null, date + "-" + Math.round(Math.random() * 10000) + "-" + file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error("L'image n'est pas acceptée"), false)
    }
}


const upload = multer({
    storage : storage,
    limits  : {
        fileSize : 1024 * 1024 * 5
    },
    fileFilter : fileFilter
})
// END CONFIG MULTER



// ROAD ANNOUNCEMENT MANAGEMENT
router.get('/sigup', (req, res) => {
    console.log('GET /signup');
    res.render('signup');
})

router.get('/profile', (req, res) => {
    console.log('GET /profile');
    res.render('profile');
})

router.get('/admin', (req, res) => {
    console.log('GET /admin');
    res.render('admin');
})

router.get('/admin/products/add', (req, res) => {
    console.log('GET /admin/products/add');
    res.render('add');
})





module.exports = router;