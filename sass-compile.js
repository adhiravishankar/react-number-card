const sass = require('sass');
const write = require('write');

const compiled = sass.compile('./scss/index.scss');
write.sync('./dist/index.css', compiled.css, { overwrite: true });
