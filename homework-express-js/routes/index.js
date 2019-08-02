var express = require('express');
var router = express.Router();

let users = [
  { id: 1, name: 'Andrei' },
  { id: 2, name: 'Mihai' },
  { id: 3, name: 'Anca' },
  { id: 4, name: 'Monica' },
  { id: 5, name: 'Nicu' },
];


router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    users: users,
  });
});

router.get('/users', (req, res, next) => res.send(users));

router.get('/users/:id', (req, res, next) =>
  res.send(users.filter(data => data.id == req.params.id))
);

router.post('/users', (req, res, next) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };

  if (!req.body.name) {
    res.status(400).send('Name is required');
    return;
  } else {
    users.push(user);
    console.log(req.body);
    res.send(users);
  }
});

router.put('/users/:id', (req, res, next) => {
  let user = users.filter(data => data.id == req.params.id);
  let updateUser = {
    id: req.params.id,
    name: req.body.name
  };
  users.splice(req.params.id - 1, 1, updateUser);
  res.send(users);
});

router.delete('/users/:id', (req, res, next) => {
  users = users.filter( data => data.id != req.params.id);
  res.send(`User with ID ${req.params.id} was deleted`);
});

module.exports = router;
