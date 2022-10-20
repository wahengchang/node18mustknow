# module system - esmodule

##

```js
  "type": "module",
```

## test
`jest` does not understand esmodule by default, adding `"node --experimental-vm-modules ./node_modules/.bin/jest"` is necessary.

```js
  "devDependencies": {
    "jest": "^29.2.0"
  },
  "scripts": {
    "test": "node --experimental-vm-modules ./node_modules/.bin/jest"
  }
```