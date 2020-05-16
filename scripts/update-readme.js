const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, '../src'), (err, files) => {
  if (err) {
    return console.error(err);
  }

  let readme = `

# Icons

Library of svg icons exported as React Components

## Install

\`\`\`
npm i -S @chrisoverstreet/icons
\`\`\`

## Use

On the Web! 🖥
\`\`\`jsx
import { Add } from '@chrisoverstreet/icons/react;

export default () => <Add />;
\`\`\`

On mobile! 📱
\`\`\`jsx
import { Add } from '@chrisoverstreet/icons/react-native;

export default () => <Add />;
\`\`\`

Add props...
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
