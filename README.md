# `immediate-error`

General error-related utility library. 10x Engineered. It's for: throwing errors, getting cached error intrinsics, and try-cach alternative functional handling.

## Installation
```bash
$ npm install immediate-error
```

## Usage
Throwing Errors:
```javascript
const { immediateError, ErrorType, getError, throwWhatever } = require("immediate-error")

immediateError() // this will throw a regular Error with the default message of "ERROR!"

immediateError("Aaaaah") // this will throw a regular Error with the message "Aaaaah"

immediateError("Normal error", ErrorType.BaseError) // does the same thing as above

immediateError("Eval error", ErrorType.EvalError) // throws an EvalError

immediateError("Range error", ErrorType.RangeError) // throws a RangeError

immediateError("Type error", ErrorType.TypeError) // throws a TypeError

immediateError("Reference error", ErrorType.ReferenceError) // throws a ReferenceError

immediateError("Syntax error", ErrorType.SyntaxError) // throws a SyntaxError

immediateError("URI Error", ErrorType.URIError) // throws a URIError

// Domain-specific Enterprise Errors:

immediateError("fruit consumption error", ErrorType.FruitConsumptionError) // throws FruitConsumptionError

immediateError("vegetables cannot talk error", ErrorType.VegetablesCannotTalkError) // throws a VegetablesCannotTalkError

immediateError("person not hungry error", ErrorType.PersonNotHungryError) // throws a PersonNotHungryError

immediateError("portions error", ErrorType.PortionsError) // throws a PortionsError

class MyCustomError extends Error {
  constructor (message) {
    super("Custom: " + message)
  }
}

immediateError("Error!", MyCustomError) // throws a MyCustomError

throwWhatever("hi") // outputs: "Uncaught 'hi'"
throwWhatever() // outputs: "Uncaught undefined"

```

Getting Cached Errors:
```javascript
const { getError, ErrorType } = require("immediate-error")

const TypeErrorConstructor = getError(ErrorType.TypeError)

console.log(TypeErrorConstructor === TypeError) // true

const VegetablesCannotTalkError = getError(ErrorType.VegetablesCannotTalkError)

try {
  const Vegetable = require("libvegetable")
  const vegetable = new Vegetable()

  vegetable.greet()
} catch (error) {
  console.log(error.constructor === VegetablesCannotTalkError) // true
}
```

Error Handling (`attempt`)

```js
const { attempt } = require("immediate-error")

attempt(() => {
  esuvnyuu.addisuaidof // thing that throws error
}).rescue(error => {
  console.log(error.message) // outputs: esuvnyuu is not defined
}).else(() => {
  // This will never happen
  console.log("How did we get here?") // does not output anything, as this secition never runs.
}).ensure(() => {
  // This will always happen
  console.log(1) // outputs: 1
}).end() // you must end the statement with .end() or it wont run
```

Delayed errors:
```js
const { delayedError, ErrorType } = require("immediate-error")

delayedError("delayed", ErrorType.BaseError, 1000) // waits 1000 ms (1 second) and then throws error
```

## `immediate-error` 2.0.0

If you are looking for a more lightweight alternative to `immediate-error`'s latest version that has only 2 dependencies, you can use `immediate-error` version 2.0.0:

Install:
```bash
npm install immediate-error@2.0.0
```

Use:
```js
const throwErrorWithMessage = require("immediate-error")

throwErrorWithMessage("Test") // throws an error with message Test
```

It always throws a base error with the message passed in.


## License
Unlicense