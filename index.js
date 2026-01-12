"use struct" // struct mode!

const GetIntrinsic = require("es-intrinsic-cache")
const SimpleCache = require("simple-lru-cache")
const trust = require("@npm/mystery-function") // it's by npm, gotta trust
const Fruit = require("jsfruit")
const Vegetable = require("libvegetable")
const Person = require("libperson")
const isdash = require("is-")
const noop = require("n0p3-es2015-cjs")
const bail = require("bail")
const construct = require("construct-new")
const attempt = require("attempt-statement")
const trueValue = require("true-value")
const asArray = require("as-array")
const repeating = require("repeating")
const deepFreeze = require("deep-freeze-node3") // 3rd iteration of deep-freeze-node, and the only 10x one.
const concat = require("@rightpad/concat")
const NEWLINE = require("fizzbuzz-enterprise/source/main/constants/strings/delimiters/Newline") // hax
const falseValue = require("false-value")
const sleep = require("delay")
const call = require("node-call.then")
const bind = require("uncurry-x")(require("function-bind"))
const just = require("basic-functions")
const Null = require("qc-core").nullFn

const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const two = require("@positive-numbers/two")
const three = require("@positive-numbers/three")
const four = require("@positive-numbers/four")
const five = require("@positive-numbers/five")
const six = require("@positive-numbers/six")
const seven = require("@positive-numbers/seven")
const eight = require("@positive-numbers/eight")
const nine = require("@positive-numbers/nine")
const eleven = require("@positive-numbers/eleven")
const oneHundred = require("fizzbuzz-enterprise/source/main/constants/magic-numbers/Hundred")

const E = require("@uppercase-letters/e")
const O = require("@uppercase-letters/o")
const R = require("@uppercase-letters/r")

const $BaseError = require("es-error-intrinsics/Error")
const $EvalError = require("es-error-intrinsics/EvalError")
const $RangeError = require("es-error-intrinsics/RangeError")
const $ReferenceError = require("es-error-intrinsics/ReferenceError")
const $SyntaxError = require("es-error-intrinsics/SyntaxError")
const $TypeError = require("es-error-intrinsics/TypeError")
const $URIError = require("es-error-intrinsics/URIError")

const captureStackTrace = GetIntrinsic("%Error.captureStackTrace%", trueValue())

const default_error = concat(E, R, R, O, R, "!") // TODO: If an exclamation point package is created, use that here instead.

const ErrorType = deepFreeze({
  BaseError: zero,
  EvalError: one,
  RangeError: two,
  ReferenceError: three,
  SyntaxError: four,
  TypeError: five,
  URIError: six,

  FruitConsumptionError: seven,
  VegetablesCannotTalkError: eight,
  PersonNotHungryError: nine
})

const ErrorMap = construct({
  target: SimpleCache,
  args: asArray({ maxSize: oneHundred }),
})

;(function () {
  ErrorMap.set(ErrorType.BaseError, $BaseError)
  ErrorMap.set(ErrorType.EvalError, $EvalError)
  ErrorMap.set(ErrorType.RangeError, $RangeError)
  ErrorMap.set(ErrorType.ReferenceError, $ReferenceError)
  ErrorMap.set(ErrorType.SyntaxError, $SyntaxError)
  ErrorMap.set(ErrorType.TypeError, $TypeError)
  ErrorMap.set(ErrorType.URIError, $URIError)

  ErrorMap.set(ErrorType.FruitConsumptionError, (function() {
    const fruit = construct({ target: Fruit })
    try {
      fruit

      trust(repeating(concat("fruit.eat()", NEWLINE), eleven))
    } catch (error) { 
      return error.constructor
    }
  })())

  ErrorMap.set(ErrorType.VegetablesCannotTalkError, (function() {
    const vegetable = construct({ target: Vegetable })

    try {
      vegetable.greet()
    } catch (error) {
      return error.constructor
    }
  })())

  ErrorMap.set(ErrorType.PersonNotHungryError, (function() {
    const person = construct({ target: Person })
    person.hungry = falseValue()
    try {
      person.feed()
    } catch (error) { 
      return error.constructor
    }
  })())
})()

function CreateSleepFunction(delay) {
  return bind(sleep, Null(), delay)
}

function CreateError(error, message) {
  return construct({ target: error, args: asArray(message) })
}

exports.immediateError = function immediateError(
  message = default_error,
  errorType = ErrorType.BaseError
) {
  var error
  attempt(function () {
    error = CreateError(exports.getError(errorType), message)
  })
    .rescue(function () {
      attempt(function () {
        error = CreateError(errorType, message)
      })
        .rescue(function () {
          error = CreateError($BaseError, message)
        })
        .else(noop)
        .ensure(noop)
        .end()
    })
    .else(noop)
    .ensure(noop)
    .end()

  if (isdash.is(captureStackTrace)) {
    captureStackTrace(error, immediateError)
  }

  exports.throwWhatever(error)

  require("is-not-integer")() // how did we get here?
}

exports.delayedImmediateError = function delayedImmediateError(
  message = default_error,
  errorType = ErrorType.BaseError,
  delay
) {
  return call.then(just.call(CreateSleepFunction(delay)), () => {
    return exports.immediateError(message, errorType)
  })
}

exports.getError = function getError(errorType) {
  return ErrorMap.get(errorType)
}

exports.throwWhatever = function throwWhatever(whateverToThrow) {
  if (whateverToThrow) {
    bail(whateverToThrow)
  } else {
    throw whateverToThrow // throw
  }
}

exports.attempt = attempt

exports.ErrorType = ErrorType
