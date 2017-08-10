'use strict';
let Q = require('q');
let request = require('request');
let todosMetier = require("../utils/todosMetier");
let todos = 'https://jsonplaceholder.typicode.com/todos';
let array = [];


/**
 * Récupere la todolist
 * @returns {*}
 */
function getAllTodos() {
    // je declare une promesse
    var defer = Q.defer();
    // requete vers la liste des todos
    request(todos, function (err, resp) {
        var body = JSON.parse(resp.body);
        todosMetier.parseForTitle(body, "title", array).then(function (resp) {
            defer.resolve(resp);
        })
    });
    // je retourne ma promesse
    return defer.promise;
}




module.exports = {
    getAllTodos: getAllTodos
};