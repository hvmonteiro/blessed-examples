'use strict'; //jshint ignore:line

var blessed = require('blessed'),
    screen = blessed.screen();

var form = blessed.form({
    parent: screen,
    keys: true,
    left: 'center',
    top: 'center',
    width: 30,
    height: 8,
    bg: 'green',
    autoNext: true,
    content: 'Add Alert'
});

var greaterThanEdit = blessed.Textbox({
    parent: form,
    top: 3,
    height: 1,
    left: 2,
    right: 2,
    bg: 'black',
    keys: true,
    inputOnFocus: true,
    content: 'test',
});


var submit = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
        left: 1,
        right: 1
    },
    left: 10,
    bottom: 2,
    name: 'submit',
    content: 'submit',
    style: {
        bg: 'blue',
        focus: {
            bg: 'red'
        },
        hover: {
            bg: 'red'
        }
    }
});

var cancel = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
        left: 1,
        right: 1
    },
    left: 20,
    bottom: 2,
    name: 'cancel',
    content: 'cancel',
    style: {
        bg: 'blue',
        focus: {
            bg: 'red'
        },
        hover: {
            bg: 'red'
        }
    }
});

submit.on('press', function() {
    form.submit();
});

cancel.on('press', function() {
    form.reset();
});

form.on('submit', function(data) {
    form.setContent('Submitted.');
    screen.render();
});

form.on('reset', function(data) {
    form.setContent('Canceled.');
    screen.render();
});

screen.key('q', function() {
    process.exit(0);
});

greaterThanEdit.focus();


screen.render();



