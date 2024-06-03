'use strict';

var getRandomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

var showColorInConsole = function showColorInConsole() {
    var color = getRandomColor();
    console.log(color);
};

var main = function main() {
    showColorInConsole();
};

main();
