var express = require('express');
var router = express.Router();

router.get('/email', function(req, res, next) {
  res.json({
      "name":"Sunil Banmala",
      "email":"banmalasunil@gmail.com"
    })
});

module.exports = router;
