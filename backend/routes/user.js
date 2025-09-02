const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('User route');
});

router.get('/101',(req,res) =>{
    res.send('<h1>User 101 route</h1>');

})

module.exports = router;

