const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, '../src'), (err, files) => {
  if (err) {
    return console.error(err);
  }

  let readme = `
# Icons

Library of svg icons exported as React Components

`;

  files.forEach(file => readme += `![${file}](https://raw.githubusercontent.com/chrisoverstreet/icons/master/src/${file})`)

  fs.writeFileSync(path.join(__dirname, '../README.md'), readme);
});
