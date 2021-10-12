const fs = require('fs');

const en = require('./en');
const pl = require('./pl');

const createDataWriter = language => data => {
    const prefix = `${language}:`;
    console.log(prefix, 'Got', Object.keys(data).length, 'entries.');
    fs.writeFile(
        __dirname + `/../data/${language}/hypocoristics.json`,
        JSON.stringify(data, null, 2),
        {
            encoding: "utf8"
        },
        function (error) {
            if (error) throw error;
            console.log(prefix, 'File written.');
        }
    );
};

en().then(createDataWriter('en'));
pl().then(createDataWriter('pl'));
