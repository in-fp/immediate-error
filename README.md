# `immediate-error`

This is a utility to throw an error. Also it's a way to get robustly cached error intrinsics.

## Installation
```bash
$ npm install immediate-error
```

## Usage
Throwing Errors:
```javascript
const { immediateError, ErrorType, getError } = require("immediate-error")

immediateError() // this will throw a regular Error with the default message of "ERROR!"

immediateError("Aaaaah") // this will throw a regular Error with the message "Aaaaah"

immediateError("Normal error", ErrorType.BaseError) // does the same thing as above

immediateError("Eval error", ErrorType.EvalError) // throws an EvalError

immediateError("Range error", ErrorType.RangeError) // throws a RangeError

immediateError("Type error", ErrorType.TypeError) // throws a TypeError

immediateError("Reference error", ErrorType.ReferenceError) // throws a ReferenceError

immediateError("Syntax error", ErrorType.SyntaxError) // throws a SyntaxError

immediateError("URI Error", ErrorType.URIError) // throws a URIError

class MyCustomError extends Error {
  constructor (message) {
    super("Custom: " + message)
  }
}

immediateError("Error!", MyCustomError) // throws a MyCustomError

```

Getting Cached Errors:
```javascript
const { getError, ErrorType } = require("immediate-error")

const TypeErrorConstructor = getError(ErrorType.TypeError)

console.log(TypeErrorConstructor === TypeError) // true
```

### Changelog
See Changelog in [CHANGELOG.md](https://github.com/enterprise-npm-ai/immediate-error/blob/main/CHANGELOG.md)

## License
Unlicense