ngl.is
======

Type detection for Angular 1.x

Usage
-----

```js
if (nglIsFunction(foo)) { foo(); }
```

Install
-------

    bower install --save ngl.is

### Include the sources

```html
<script src="bower_components/ngl.is/dist/is.min.js"></script>
```

### Load the angular module

Add `ngl.is` to your app dependencies

```js
angular.module('app', [ 'ngl.is' ]);
```

API
---

### `nglIsDefined(value) -> boolean`

```js
nglIsDefined() // false
nglIsDefined(null) // true
nglIsDefined(2) // true
```

### `nglIsNumber(value) -> boolean`

```js
nglIsNumber(2) // true
nglIsNumber('2') // false
nglIsNumber('a') // false
```

### `nglIsString(value) -> boolean`

```js
nglIsString('a') // true
nglIsString(2) // false
```

### `nglIsFunction(value) -> boolean`

```js
nglIsFunction(function () {}) // true
```

### `nglIsArray(value) -> boolean`

```js
nglIsArray([]) // true
nglIsArray({ length: 0 }) // false
```

### `nglIsObject(value) -> boolean`

```js
nglIsObject({}) // true
nglIsObject([]) // false
nglIsObject(function () {}) // false
```

### `nglIsNumeric(value) -> boolean`

```js
nglIsNumber(2) // true
nglIsNumber('2') // true
nglIsNumber('a') // false
```

### `nglIsScalar(value) -> boolean`

```js
nglIsScalar(3) // true
nglIsScalar('abc') // true
nglIsScalar([]) // false
nglIsScalar({}) // false
```

Contributing
------------

PRs are welcome!

    git clone https://github.com/angel-js/ngl.is
    cd ngl.is
    npm run setup

### Tasks

    npm run <task>

  * **setup:** install all required dependencies
  * **upgrade:** update all installed dependencies
  * **lint:** static analysis of JavaScript sources and unit tests
  * **test:** run available unit tests
  * **build:** generate a `dist/` directory with the compiled app
