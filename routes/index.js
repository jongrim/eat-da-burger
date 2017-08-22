const router = require('express').Router();
const db = require('../models');

router.get('/', function(req, res) {
  db.burger.findAll({}).then(results => {
    let devoured = results.filter(burger => {
      if (burger.devoured) {
        return burger;
      }
    });
    let toEat = results.filter(burger => {
      if (!burger.devoured) {
        return burger;
      }
    });
    toEat = toEat.map((burger, i) => {
      burger.number = i + 1;
      return burger;
    });
    res.render('index', { burgers: toEat, eaten: devoured });
  });
});

router.post('/', function(req, res) {
  let { burger } = req.body;
  db.burger
    .create({
      burger
    })
    .then(() => {
      res.redirect('/');
    });
});

router.post('/devour', function(req, res) {
  let { burger } = req.body;
  console.log(burger);
  db.burger
    .find({
      where: {
        id: burger
      }
    })
    .then(burger => {
      burger.update({
        burger: burger.burger,
        devoured: true
      });
    })
    .then(() => {
      res.redirect('/');
    });
});

module.exports = router;
