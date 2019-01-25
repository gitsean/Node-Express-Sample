var express = require('express');
var score = require('../services/bowling');
var router = express.Router();

router.get('/:rolls', function(req, res) {
  console.log('req: ', req.params.rolls);
  const rolls = req.params.rolls;
  const finalScore = score(rolls);

  res.send(finalScore);
});

module.exports = router;
