const GetIntrinsic = require("get-intrinsic")
const $Object = require("es-object-atoms")
const zero = require("@positive-numbers/zero")
const one = require("@positive-numbers/one")
const two = require("@positive-numbers/two")
const three = require("@positive-numbers/three")
const four = require("@positive-numbers/four")
const five = require("@positive-numbers/five")
const six = require("@positive-numbers/six")
const seven = require("@positive-numbers/seven")
const { throwop, noop } = require("yanoop")
const { Switch } = require("switch-in-fp")
const assert = require("assert-fn")
const nativeAssert = require("node:assert")
const vm = require("node:vm")
const construct = require("construct-new")
const attempt = require("attempt-statement")

const $BaseError = require("es-errors")
const $AssertionError = assert.AssertionError
const $AggregateError = GetIntrinsic("%AggregateError%")
const $RangeError = require("es-errors/range")
const $ReferenceError = require("es-errors/ref")
const $SyntaxError = require("es-errors/syntax")
const $TypeError = require("es-errors/type")
const $NativeAssertionError = nativeAssert.AssertionError

const default_error = "ERROR!"

const ErrorType = $Object.freeze({
  BaseError: zero,
  AssertionError: one,
  AggregateError: two,
  RangeError: three,
  ReferenceError: four,
  SyntaxError: five,
  TypeError: six,
  NativeAssertionError: seven
})

exports.immediateError = function immediateError(message = default_error, errorType = ErrorType.BaseError) {
  var error

  Switch(errorType)
    .case(ErrorType.BaseError, function () {
      error = construct({ target: $BaseError, args: [message] })
    })
    .case(ErrorType.AssertionError, function () {
      error = construct({ target: $AssertionError, args: [message] })
    })
    .case(ErrorType.AggregateError, function () {
      error = construct({ target: $AggregateError, args: [message] })
    })
    .case(ErrorType.RangeError, function () {
      error = construct({ target: $RangeError, args: [message] })
    })
    .case(ErrorType.ReferenceError, function () {
      error = construct({ target: $ReferenceError, args: [message] })
    })
    .case(ErrorType.SyntaxError, function () {
      error = construct({ target: $SyntaxError, args: [message] })
    })
    .case(ErrorType.TypeError, function () {
      error = construct({ target: $TypeError, args: [message] })
    })
    .case(ErrorType.NativeAssertionError, function () {
      error = construct({ target: $NativeAssertionError, args: [message] })
    })
    .else(function () {
      attempt(function() {
        error = construct({ target: errorType, args: [message] })
      }).rescue(function() {
        error = construct({ target: $BaseError, args: [message] })
      }).else(noop).ensure(noop).end()
    })
    .execute()

  const context = {
    error,
    throwop
  }
  vm.createContext(context)

  const script = construct({ target: vm.Script, args: [`throwop(error)`, { filename: default_error }] })

  script.runInContext(context)
}

exports.ErrorType = ErrorType
