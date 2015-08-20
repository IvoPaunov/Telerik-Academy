/* globals $ */

function solve() {
    return function (selector) {
        var template = '';

        template += '<table class="items-table">' +
            ' <thead>' +
            ' <tr>' +
            ' <th>#</th>' +
            '{{#each this.headers}}' +
            ' <th>{{this}}</th>' +
            '{{/each}}' +
            ' </tr>' +
            ' </thead>' +
            ' <tbody>' +
            '{{#each this.items}}' +
            ' <tr>' +
            ' <td>{{@index}}</td>' +
            ' <td>{{this.col1}}</td>' +
            ' <td>{{this.col2}}</td>' +
            ' <td>{{this.col3}}</td>' +
            ' </tr>' +
            '{{/each}}' +
            ' </tbody>' +
            ' </table>';

        $(selector).html(template);
    };
};

module.exports = solve;