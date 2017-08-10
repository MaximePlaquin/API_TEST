var express = require('express');
var router = express.Router();
var todosService = require('../services/todos');

/* GET users listing. */
router.get('/', function (req, res, next) {
    todosService.getAllTodos().then(function (body) {
        res.json({"data" : body});
    }, function (err) {
        res.send(err);
    })

});

module.exports = router;
