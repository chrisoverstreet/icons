const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, '../src'), (err, files) => {
  if (err) {
    return console.error(err);
  }

  let readme = `
# Icons

Library of svg icons exported as React Components

## Usage

*Web*

\`\`\`jsx
import { Add } from '@chrisoverstreet/icons/react;

export default () => <Add />;
\`\`\`

*Mobile*

\`\`\`jsx
import { Add } from '@chrisoverstreet/icons/react-native;

export default () => <Add />;
\`\`\`

*Props*

Props are spread to root \`<svg>\` element.

\`\`\`jsx
<Add className="custom-class" styles={{ height: '1em' }} />
\`\`\`

## Reference

| Icon | Name |
| :-: | - |
`;

  files.forEach(file => readme += `| ![${file}](https://raw.githubusercontent.com/chrisoverstreet/icons/master/src/${file}) | ${file.split('.')[0]} |\n`)

  readme += `

## Contributing

Please see documentation for [contributing here](./CONTRIBUTING.md).
`;

  fs.writeFileSync(path.join(__dirname, '../README.md'), readme);
});
