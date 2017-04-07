React-componentes-library-boilerplate

=========================

An opinionated setup I plan to use for my libraries.
The idea is to have a ***React-cssmodules-es6-compatible-and-testable-also-with-a-build-process-integrated-template*** :)

See `package.json` in the root and the example folder for the list of the available commands.

Note that this is an ***opinionated boilerplate.***
***(You have been warned)***🙃

----------------------------------

### INSTALLATION (AKA How do I use this)
```
git clone --bare https://github.com/fforres/react-component-library-boilerplate.git {your_awesome_library_name}
```
#### And that's it!

----------------------------------

### USAGE / (Exporting and Importing) 🤓
Your main folder for developing is `./src/Components`. Those are the components that will be exported.
Every component you want to export, needs to be added to `./src/Components/index.js` in the following form.

```javascript
export { AutoComplete } from './AutoComplete';
export { RadioButtonsArea } from './RadioButtonsArea';
```

That means your component needs to be exported as a destructurable variable.
Like this.
```javascript
//Component
import React, { Component, PropTypes } from 'react';
import RadioButton from '../RadioButton';

import style from './index.css';

export class RadioButtonsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.base}>
      </div>
    );
  }
}
export default RadioButtonsArea;
```
See? We are exporting the specific class (`export class RadioButtonsArea`) that way it can be imported and destructured.

After you map all your components to the `./src/Components/index.js` file, and run `npm run build` to transpile them, we map the main package.json file to the transpiled `./src/Components/index.js` file (in `./dist/index.js`).

That means that you can do:
```javascript
import { AutoComplete } from 'MyAwesomeReactLibrary'
```
in the proyect you are importing this module.


### STYLING 😎

We are using [CSS Modules](https://github.com/css-modules/css-modules) for the styling default solution.
So you can use it's power for developing :)

Afterwards all bundled css files will get extracted to `./dist/combined.css` by the macig of babel + a [css-modules-transform plugin](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform)

That can get imported using
```javascript
import from 'MyAwesomeReactLibrary/dist/combined.css'
```

----------------------------------

### TODO 📌
- [ ] Add tests examples for Ava + Enzyme.
- [ ] Add a tutorial / detailed example
- [ ] Try some other css / styling approach

- [x] HMR / Hot-reload
- [x] Css Modules
- [x] Validate CommonJS builds.
- [x] Babel
- [x] Webpack
- [x] ESLint
- [x] Add logic for css handling (Or extraction??)
- [x] Fix build process(?)
