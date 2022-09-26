const fs = require('fs');
const { component, story, test, barrel } = require("./templates.tsx")

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const root = `./src/components/` 
const dir = `${root}${name}/`;
const storyDir = `./stories/`
const testDir = `./test/`
// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// types.ts
fs.writeFile(`${root}/types.ts`, `\nexport interface ${name}Props {}`, { flag: "a+" }, writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${storyDir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${testDir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${root}/index.tsx`, barrel(name), { flag: "a+" }, writeFileErrorHandler);