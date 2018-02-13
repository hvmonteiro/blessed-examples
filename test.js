var blessed = require('blessed'),
    contrib = require('blessed-contrib'),
    screen = blessed.screen(),
    line = contrib.line(
        { style:
            { line: "yellow",
                text: "green",
                baseline: "black"},
            xLabelPadding: 3,
            xPadding: 5,
            label: 'Title'}),
    data = {
        x: ['t1', 't2', 't3', 't4'],
        y: [5, 1, 7, 5]
    };
screen.append(line); //must append before setting data
line.setData([data]);

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});

screen.render();
