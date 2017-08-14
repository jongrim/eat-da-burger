const router = require('express').Router();
const controller = require('../controllers');

router.get('/', function(req, res) {
  controller.getAll().then(results => {
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
  controller.addOne(req.body).then(() => {
    res.redirect('/');
  });
});

router.post('/devour', function(req, res) {
  controller.updateOne(req.body).then(() => {
    res.redirect('/');
  });
});

module.exports = router;
