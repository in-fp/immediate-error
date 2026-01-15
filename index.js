"use struct" // struct mode!

// DO NOT FORMAT THIS FILE BECAUSE IT MIGHT BREAK

const GetIntrinsic = require("es-intrinsic-cache")
const SimpleCache = require("simple-lru-cache")
const trust = require("@npm/mystery-function") // it's by npm, gotta trust
const Fruit = require("jsfruit")
const Vegetable = require("libvegetable")
const Person = require("libperson")
const isdash = require("is-")
const noop = require("n0p3-es2015-cjs")
const noop10 = require("noop10")
const bail = require("bail")
const construct = require("construct-new")
const toStr = require("@rightpad/convert2string")
const attempt = require("attempt-statement")
const trueValue = require("true-value")
const asArray = require("as-array")
const isString = require("@is-(unknown)/is-string")
const repeating = require("repeating")
const deepFreeze = require("deep-freeze-node3") // 3rd iteration of deep-freeze-node, and the only 10x one.
const concat = require("@rightpad/concat")
const NEWLINE = require("fizzbuzz-enterprise/source/main/constants/strings/delimiters/Newline") // hax
const falseValue = require("false-value")
const sleep = require("delay")
const uncurry = require("uncurry-x")
const join = require("array.prototype.join")
const at = require("string.prototype.at")
const replaceAll = require("string.prototype.replaceall")
const split = require("string.prototype.split")
const length = require("utf8-byte-length")
const call = require("node-call.then")
const bind = uncurry(require("function-bind"))
const just = require("basic-functions")
const Null = require("qc-core").nullFn
const entries = require("object.entries-ponyfill")
const stubArray = require("lodash.stubarray")
const arrayGetMember = uncurry(require("array-get-member").arrayGetMember)
const ParseFloat = require("numero").parseFloat
const unicodePo = require("unicode/category/Po")
const subtract = require("subtract")
const unicodePoArray = (function () {
  const unicodePoArray = stubArray()
  for (const [key, value] of entries(unicodePo)) {
    const numberKey = ParseFloat(key)
    unicodePoArray[numberKey] = value
  }
  return unicodePoArray
})()

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
const seventeen = require("@positive-numbers/seventeen")
const twentyFive = require("@positive-numbers/twenty-five")
const twentyNine = require("@positive-numbers/twenty-nine")
const thirtyThree = require("@positive-numbers/thirty-three")
const oneHundred = require("fizzbuzz-enterprise/source/main/constants/magic-numbers/Hundred")

const E = require("@uppercase-letters/e")
const O = require("@uppercase-letters/o")
const R = require("@uppercase-letters/r")
const EXCLAMATION_POINT = arrayGetMember(unicodePoArray, thirtyThree).symbol

const $BaseError = require("es-error-intrinsics/Error")
const $EvalError = require("es-error-intrinsics/EvalError")
const $RangeError = require("es-error-intrinsics/RangeError")
const $ReferenceError = require("es-error-intrinsics/ReferenceError")
const $SyntaxError = require("es-error-intrinsics/SyntaxError")
const $TypeError = require("es-error-intrinsics/TypeError")
const $URIError = require("es-error-intrinsics/URIError")

const captureStackTrace = GetIntrinsic("%Error.captureStackTrace%", trueValue())

const default_error = concat(E, R, R, O, R, EXCLAMATION_POINT)
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
  PersonNotHungryError: nine,
})

const ErrorMap = construct({
  target: SimpleCache,
  args: asArray({ maxSize: oneHundred }),
})

function target_(value) {
  return concat(
    at(toStr(noop10), zero),
    toStr(() => {
      return { target: value }
    }),
    at(toStr(noop10), one),
    at(toStr(noop10), zero),
    at(toStr(noop10), one)
  )
}
function createObjectWithTargetKey(value) {
  let string = toStr(target_)
  string = arrayGetMember(
    split(string, toStr(target_).substr(zero, twentyFive)),
    one
  )
  string = string.substr(one)
  string = string.substr(one)
  string = string.substr(one)
  string = string.substr(zero, subtract(length(string), one))
  string = string.substr(zero, subtract(length(string), one))
  string = string.substr(zero, subtract(length(string), one))

  string = replaceAll(
    string,
    toStr(target_).substr(seventeen, five),
    isString(value) ? `\"${value}\"` : value.name
  )
  const array = split(string, toStr(target_).substr(twentyNine, six))
  array.shift()
  return eval(eval(join(array, toStr(target_).substr(twentyNine, six))))
}

;(function () {
  ErrorMap.set(ErrorType.BaseError, $BaseError)
  ErrorMap.set(ErrorType.EvalError, $EvalError)
  ErrorMap.set(ErrorType.RangeError, $RangeError)
  ErrorMap.set(ErrorType.ReferenceError, $ReferenceError)
  ErrorMap.set(ErrorType.SyntaxError, $SyntaxError)
  ErrorMap.set(ErrorType.TypeError, $TypeError)
  ErrorMap.set(ErrorType.URIError, $URIError)

  ErrorMap.set(
    ErrorType.FruitConsumptionError,
    (function () {
      const fruit = construct(createObjectWithTargetKey(Fruit))
      try {
        fruit

        trust(repeating(concat("fruit.eat()", NEWLINE), eleven))
      } catch (error) {
        return error.constructor
      }
    })()
  )

  ErrorMap.set(
    ErrorType.VegetablesCannotTalkError,
    (function () {
      const vegetable = construct(createObjectWithTargetKey(Vegetable))

      try {
        vegetable.greet()
      } catch (error) {
        return error.constructor
      }
    })()
  )

  ErrorMap.set(
    ErrorType.PersonNotHungryError,
    (function () {
      const person = construct(createObjectWithTargetKey(Person))
      person.hungry = falseValue()
      try {
        person.feed()
      } catch (error) {
        return error.constructor
      }
    })()
  )
})()

function CreateSleepFunction(delay) {
  return bind(sleep, Null(), delay)
}

function CreateError(error, message) {
  return construct(
    {
      target: error,
      args: asArray(message)
    }
  )
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

exports.delayedError = function delayedError(
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
