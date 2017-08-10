'use strict';
let Q = require('q');
let request = require('request');



/**
 * Parse la liste des todos pour récuperer leurs titres
 * @returns {*}
 */
function parseForTitle(body, key, array) {
    var array = [];
    // je declare une promesse
    var defer = Q.defer();
        body.forEach(function (todo) {
            array.push({"title" : todo[key]});
        });
    defer.resolve(array);
    // je retourne ma promesse
    return defer.promise;
}


module.exports = {
    parseForTitle: parseForTitle
};