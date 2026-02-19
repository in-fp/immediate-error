# `immediate-error`

General error-related utility library. 10x Engineered. It's for: throwing errors, getting catched error intrinsics, and try-cach alternative functional handling.

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

immediateError("vegetables do not talk error", ErrorType.VegetablesDoNotTalkError) // throws a VegetablesDoNotTalkError

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

const VegetablesDoNotTalkError = getError(ErrorType.VegetablesDoNotTalkError)

try {
  const Vegetable = require("libvegetable")
  const vegetable = new Vegetable()

  vegetable.greet()
} catch (error) {
  console.log(error.constructor === VegetablesDoNotTalkError) // true
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

Getting Error Messages:
```js
// MESSAGES includes all error messages generally thrown from domain-specic enterprise errors
const { MESSAGES } = require("immediate-error")
console.log(MESSAGES.DOMAIN.FRUIT_CONSUMPTION_ERROR.NO_FRUIT_LEFT) // "no fruit left"
console.log(MESSAGES.DOMAIN.VEGETABLES_DO_NOT_TALK_ERROR.VEGETABLES_CAN_NOT_TALK) // "vegetables can not talk"
console.log(MESSAGES.DOMAIN.PERSON_NOT_HUNGRY_ERROR.IS_NOT_HUNGRY_AND_CANNOT_BE_FED) // "% is not hungry and cannot be fed"
console.log(MESSAGES.DOMAIN.PORTIONS_ERROR.PORTION_SIZE_EXPECTED_TO_BE_A_POSITIVE_INTEGER) // "Portion size expected to be a positive integer"
console.log(MESSAGES.DOMAIN.PORTIONS_ERROR.TOO_MANY_PORTIONS) // "Too many portions"
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
[EGPSL10X-1.0](https://github.com/10xly/licence)

## Code Of Conduct
[10xly Lolite Code Of Conduct](https://github.com/10xly/lolite/blob/main/CODE_OF_CONDUCT.md)

## Legal
[Legal](https://github.com/10xly/legal)

## One thing

While your wasting your valuable time using this very useful package, I'd like to make some things clear:

People are actually vegetables, and vegetables are actually fruits. Vegetables can't talk but people can, and vegetables can turn into guacamole. You can't eat guacamole, you can only specify its portions.

Sources:
- [libperson](https://npmjs.com/package/libperson?activeTab=code)
- [libvegetable](https://npmjs.com/package/libvegetable?activeTab=code)
- [jsfruit](https://npmjs.com/package/jsfruit?activeTab=code)
- [libguacamole](https://npmjs.com/package/libguacamole?activeTab=code)

These packages are by [skibidi-toilet-hacker](https://npmjs.com/~skibidi-toilet-hacker) a legendary 10x developer.