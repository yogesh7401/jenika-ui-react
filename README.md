# Jenika-UI :sparkles:

Modern UI Library :gem: that is beautifully designed and ready to use to build react applications.

## Install

You can install Jenika-UI using npm and yarn.

For NPM User:

```bash
npm install jenika-ui-react
```

For Yarn User:

```bash
yarn add jenika-ui-react
```

## Usage

Now use can use the JenikaUI Pre-styled components in your react application by import it into your component as mentioned bellow

```javascript
import { Button } from "jenika-ui-react"

export default funtion App() {
  return (
    <div>
      <Button text='My Button' size='md' variant='primary'/>
    </div>
  );
}
```

## Components

- [Accordion](https://yogesh7401.github.io/jenika-ui-react/?path=/story/components-accordion--default)
- [Alert](https://yogesh7401.github.io/jenika-ui-react/?path=/story/components-alert--default)
- [Alert Dialog](https://yogesh7401.github.io/jenika-ui-react/?path=/story/components-alert-dialog--default)
- [Badge](https://yogesh7401.github.io/jenika-ui-react/?path=/story/components-badge--default)
- [Button](https://yogesh7401.github.io/jenika-ui-react/?path=/story/components-button--default)

## Contribute

We'd love for you to contribute to our source code and to make JenikaUI even better than it is today! :heart:

### To add new component

After [Forking](https://github.com/yogesh7401/jenika-ui-react/fork) and cloning this repository run the bellow command to auto generate basic template of component, storybook, test file.

For NPM User:

```bash
npm run generate <component_name>
```

For Yarn User:

```bash
yarn generate <component_name>
```

> Here <code>component_name</code> refers to the name of the new component that is need to be created

    .
    ├── ...
    ├── src
    |   └── components
    │       └── <component_name>
    |           └── <component_name>.tsx
    |
    ├── stories  
    │   └── <component_name>.stories.tsx
    |
    ├── test  
    │   └── <component_name>.test.tsx
    └── ...


### License: [MIT](./LICENSE)

### Author:

- [Yogeshwaran](https://yogesh7401.netlify.app/)
