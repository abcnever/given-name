# given-name

Validate given name or get hypocoristics of a name.

[![Build Status](https://travis-ci.com/marek-saji/given-name.svg?branch=master)](https://travis-ci.com/marek-saji/given-name)

## Usage

```js
const hypocoristics = require('given-name/hypocoristics');
hypocoristics('Lex');
// → [Alexander, Alex, Xander, Sander, Sandy]

const data = require('given-name/data');
// → [{ Aaron: [Aar, Abigail, …]}, …]
const enData = require('given-name/data/en');
const plData = require('given-name/data/pl');

const plHypocoristicsData = require('given-name/data/pl/hypocoristics');
// → [Ada, Adusia], [Adela, Adelka], …]

const givenName = require('given-name');
// → { data: Array, hypocoristics: Function }
```

## Languages and sources

Sources of data. Pull requests for additional languages are very much
welcome.

- English: https://en.m.wiktionary.org/wiki/Appendix:English_given_names
- Polish: https://pl.m.wiktionary.org/wiki/Indeks:Polski_-_Imiona

Polish is not currently supported by this fork
## License

[ISC](./LICENSE)

[What does that even mean?](https://tldrlegal.com/license/-isc-license)
