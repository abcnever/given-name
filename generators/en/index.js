const wiktionary = require("wiktionary");

async function getData ()
{
    const wiktionaryEntry = await wiktionary('Appendix:English given names', 'en');
    return wiktionaryEntry.html
        .match(/<li>\w* - [\w\/, ]*<\/li>/g)
        .map(li => li.replace(/<\/?li>/g, ''))
        .map(line => {
            const [formal, nickStr] = line.split(" - ");
            const nickNames = nickStr.split(/, |\//);
            return {[formal]: nickNames}
        })
}

module.exports = getData;
