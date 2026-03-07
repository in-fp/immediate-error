require("none")()

/* eslint-disable perfectionist/sort-objects, max-lines */
const GetIntrinsic = require("es-intrinsic-cache")
const SimpleCache = require("simple-lru-cache")
const Fruit = require("jsfruit")
const Vegetable = require("libvegetable")
const Person = require("libperson")
const Guacamole = require("libguacamole")
const isEqual = require("@10xly/strict-equals")
const isdash = require("is-")
const noop = require("noop-enterprise")
const noop10 = require("noop10")
const bail = require("bail")
const construct = require("construct-new")
const toStr = require("@rightpad/convert2string")
const attempt = require("attempt-statement")
// eslint-disable-next-line no-inline-comments
const asArray = (value) => [value], // Put it behind bars
  trueValue = require("true-value")
const isString = require("@is-(unknown)/is-string")
const repeating = require("repeating")
// eslint-disable-next-line no-inline-comments
const deepFreeze = require("deep-freeze-node3") // 3rd iteration of deep-freeze-node, and the only 10x one.
const concat = require("@rightpad/concat")
const NEWLINE = require("fizzbuzz-enterprise/source/main/constants/strings/delimiters/Newline")
const emptyString = require("empty-string")
const falseValue = require("false-value"),
  sleep = require("@redux-saga/delay-p").default
const uncurry = require("call-bind-enterprise")
const join = require("array.prototype.join")
const at = require("string.prototype.at")
const replaceAll = require("str-replaceallof-es")
const split = require("string.prototype.split")
const length = require("utf8-byte-length")
const bind = uncurry(require("function-bind")),
  call = require("node-call.then")
const just = require("basic-functions"),
  // eslint-disable-next-line sort-vars
  Null = require("qc-core").nullFn
const entries = require("object.entries-ponyfill")
const arrayGetMember = uncurry(require("array-get-member").arrayGetMember),
  stubArray = require("lodash.stubarray")
require("get-member")()
// eslint-disable-next-line one-var
const objectGetMember = uncurry(
    require("object.prototype-intrinsic-ai").getMember,
  ),
  // eslint-disable-next-line sort-vars
  ParseFloat = require("numero").parseFloat
const unicodePo = require("unicode/category/Po")
const subtract = require("subtract")
const forEach = require("for-each")
const head = require("@extra-array/head")
const last = require("@extra-array/last"),
  unicodePoArray = objectGetMember(
    just,
    "call",
  )(() => {
    // THIS IS NOT SHADOWING!!!
    // eslint-disable-next-line no-shadow
    const unicodePoArray = stubArray()
    forEach(entries(unicodePo), (entry) => {
      const key = head(entry),
        // eslint-disable-next-line new-cap
        numberKey = ParseFloat(key),
        value = last(entry)
      unicodePoArray[numberKey] = value
    })
    return unicodePoArray
  })
const coalesce = require("es-logical-nullish-coalescing-operator")
const isFalse = require("@is-(unknown)/is-false")
const isPositiveZero = require("positive-zero")
const isNegativeZero = require("@is-(unknown)/is-negative-zero")
const isNullOrUndefined = require("@is-(unknown)/is-nil")
const isNull = require("@is-(unknown)/is-null")
const isUndefined = require("@is-(unknown)/is-undefined")
// eslint-disable-next-line sonarjs/no-globals-shadowing
const isNaN = require("@is-(unknown)/is-nan")
const use = require("use-unused-vars")
const assign = require("@frosted/object.assign")
const global = require("@10xly/global")
const getFnName = require("name-of-function")

const { TernaryCompare } = require("important-extremely-useful-classes")

const multiply = require("lolite.__private.multiplyfallback")

const nullvalue = require("primitive-value-null")
const nanvalue = require("primitive-value-nan")
const undef = require("primitive-value-undefined")

const $BigInt = require("bigint-intrinsic-ai")

const negativeZero = require("@negative-numbers/zero")
const zero = require("@positive-numbers/zero"),
  zeroBigint = $BigInt(zero)
const one = require("@positive-numbers/one")
const two = require("@positive-numbers/two")
const three = require("@positive-numbers/three")
const four = require("@positive-numbers/four")
const five = require("@positive-numbers/five")
const six = require("@positive-numbers/six")
const seven = require("@positive-numbers/seven")
const eight = require("@positive-numbers/eight")
const nine = require("@positive-numbers/nine")
const ten = require("@positive-numbers/ten")
const eleven = require("@positive-numbers/eleven")
const seventeen = require("@positive-numbers/seventeen")
const twentyFive = require("@positive-numbers/twenty-five")
const twentyNine = require("@positive-numbers/twenty-nine")
const thirtyThree = require("@positive-numbers/thirty-three")
const oneHundred = require("fizzbuzz-enterprise/source/main/constants/magic-numbers/Hundred")
const negative87 = require("@negative-numbers/eighty-seven")

// eslint-disable-next-line id-length
const E = require("@uppercase-letters/e")
// eslint-disable-next-line id-length
const O = require("@uppercase-letters/o")
const EXCLAMATION_POINT = arrayGetMember(unicodePoArray, thirtyThree).symbol,
  // eslint-disable-next-line id-length
  R = require("@uppercase-letters/r")

const $BaseError = require("es-error-intrinsics/Error")
const $EvalError = require("es-error-intrinsics/EvalError")
const $RangeError = require("es-error-intrinsics/RangeError")
const $ReferenceError = require("es-error-intrinsics/ReferenceError")
const $SyntaxError = require("es-error-intrinsics/SyntaxError")
const $TypeError = require("es-error-intrinsics/TypeError")
const $URIError = require("es-error-intrinsics/URIError")

// eslint-disable-next-line new-cap
const captureStackTrace = GetIntrinsic(
    "%Error.captureStackTrace%",
    trueValue(),
  ),
  // eslint-disable-next-line camelcase
  default_error = concat(E, R, R, O, R, EXCLAMATION_POINT),
  // eslint-disable-next-line sort-vars
  ErrorMap = construct({
    target: SimpleCache,
    // eslint-disable-next-line sort-keys
    args: asArray({ maxSize: oneHundred }),
  }),
  // eslint-disable-next-line sort-vars
  ErrorType = deepFreeze({
    BaseError: zero,
    EvalError: one,
    RangeError: two,
    ReferenceError: three,
    SyntaxError: four,
    TypeError: five,
    URIError: six,

    // eslint-disable-next-line sort-keys
    FruitConsumptionError: seven,
    VegetablesDoNotTalkError: eight,
    // eslint-disable-next-line sort-keys
    PersonNotHungryError: nine,
    PortionsError: ten,
    // eslint-disable-next-line sort-keys
    FalseJSValidationFailedToPassError: eleven,
  }),
  // eslint-disable-next-line sort-vars
  FalseJSValidationFailedToPassError = require("@falsejs/validation-failed-to-pass-error")

// eslint-disable-next-line no-underscore-dangle
function target_(value) {
  return concat(
    at(toStr(noop10), zero),
    toStr(() => ({ target: value })),
    at(toStr(noop10), one),
    at(toStr(noop10), zero),
    at(toStr(noop10), one),
  )
}

// eslint-disable-next-line max-statements
function createObjectWithTargetKey(value) {
  const name = construct({
    target: TernaryCompare,
    // eslint-disable-next-line sort-keys
    args: [isString(value), `"${value}"`, getFnName(value)],
  }).compare()
  global[name] = value
  let string = toStr(target_)
  string = arrayGetMember(
    // eslint-disable-next-line unicorn/prefer-string-slice
    split(string, toStr(target_).substr(zero, twentyFive)),
    one,
  )
  // eslint-disable-next-line unicorn/prefer-string-slice
  string = string.substr(one)
  // eslint-disable-next-line unicorn/prefer-string-slice
  string = string.substr(one)
  // eslint-disable-next-line unicorn/prefer-string-slice
  string = string.substr(one)
  // eslint-disable-next-line unicorn/prefer-string-slice
  string = string.substr(zero, subtract(length(string), one))
  // eslint-disable-next-line unicorn/prefer-string-slice
  string = string.substr(zero, subtract(length(string), one))
  // eslint-disable-next-line unicorn/prefer-string-slice
  string = string.substr(zero, subtract(length(string), one))

  string = replaceAll(
    string,
    // eslint-disable-next-line unicorn/prefer-string-slice
    toStr(target_).substr(seventeen, five),
    name,
  )
  // eslint-disable-next-line unicorn/prefer-string-slice, one-var
  const array = split(string, toStr(target_).substr(twentyNine, six))
  array.shift()
  // eslint-disable-next-line unicorn/prefer-string-slice, no-eval, sonarjs/code-eval
  return eval(eval(join(array, toStr(target_).substr(twentyNine, six))))
}

// eslint-disable-next-line init-declarations
let noFruitLeftMessage,
  // eslint-disable-next-line init-declarations
  personIsNotHungryAndCannotBeFedMessage,
  // eslint-disable-next-line init-declarations
  portionSizeExpectedToBeAPositiveIntegerMessage,
  // eslint-disable-next-line init-declarations
  vegetablesCanNotTalkMessage

objectGetMember(
  just,
  "call",
  // eslint-disable-next-line max-lines-per-function, max-statements
)(() => {
  ErrorMap.set(ErrorType.BaseError, $BaseError)
  ErrorMap.set(ErrorType.EvalError, $EvalError)
  ErrorMap.set(ErrorType.RangeError, $RangeError)
  ErrorMap.set(ErrorType.ReferenceError, $ReferenceError)
  ErrorMap.set(ErrorType.SyntaxError, $SyntaxError)
  ErrorMap.set(ErrorType.TypeError, $TypeError)
  ErrorMap.set(ErrorType.URIError, $URIError)

  ErrorMap.set(
    ErrorType.FruitConsumptionError,
    objectGetMember(
      just,
      "call",
    )(() => {
      const fruit = construct(createObjectWithTargetKey(Fruit))
      use(fruit)
      // eslint-disable-next-line init-declarations
      let result
      attempt(() => {
        // eslint-disable-next-line sonarjs/code-eval, no-eval
        eval(repeating(concat("fruit.eat()", NEWLINE), eleven))
      })
        .rescue((error) => {
          result = error.constructor
          noFruitLeftMessage = error.message
        })
        .else(noop)
        .ensure(noop)
        .end()

      return result
    }),
  )

  ErrorMap.set(
    ErrorType.VegetablesDoNotTalkError,
    objectGetMember(
      just,
      "call",
    )(() => {
      const vegetable = construct(createObjectWithTargetKey(Vegetable))
      // eslint-disable-next-line init-declarations
      let result

      attempt(() => {
        vegetable.greet()
      })
        .rescue((error) => {
          result = error.constructor
          vegetablesCanNotTalkMessage = error.message
        })
        .else(noop)
        .ensure(noop)
        .end()

      return result
    }),
  )

  ErrorMap.set(
    ErrorType.PersonNotHungryError,
    objectGetMember(
      just,
      "call",
    )(() => {
      const person = construct(createObjectWithTargetKey(Person))
      person.hungry = falseValue()
      // eslint-disable-next-line init-declarations
      let result

      attempt(() => {
        person.feed()
      })
        .rescue((error) => {
          result = error.constructor
          personIsNotHungryAndCannotBeFedMessage = replaceAll(
            error.message,
            "undefined",
            "%",
          )
        })
        .else(noop)
        .ensure(noop)
        .end()

      return result
    }),
  )

  ErrorMap.set(
    ErrorType.PortionsError,
    objectGetMember(
      just,
      "call",
    )(() => {
      // eslint-disable-next-line init-declarations
      let result
      attempt(() => {
        construct({
          target: Guacamole,
          // eslint-disable-next-line sort-keys
          args: [negative87],
        })
      })
        .rescue((error) => {
          result = error.constructor
          portionSizeExpectedToBeAPositiveIntegerMessage = error.message
        })
        .else(noop)
        .ensure(noop)
        .end()
      return result
    }),
  )

  ErrorMap.set(
    ErrorType.FalseJSValidationFailedToPassError,
    FalseJSValidationFailedToPassError,
  )
})

function CreateSleepFunction(delay) {
  // eslint-disable-next-line new-cap
  return bind(sleep, Null(), delay)
}

function CreateError(error, message) {
  return construct(
    assign(createObjectWithTargetKey(error), {
      args: asArray(message),
    }),
  )
}

exports.immediateError = function immediateError(message, errorType) {
  // eslint-disable-next-line no-param-reassign
  message = coalesce(message, default_error)
  // eslint-disable-next-line no-param-reassign
  errorType = coalesce(errorType, ErrorType.BaseError)
  // eslint-disable-next-line init-declarations
  let error
  attempt(() => {
    // eslint-disable-next-line new-cap, unicorn/throw-new-error
    error = CreateError(exports.getError(errorType), message)
  })
    .rescue(() => {
      attempt(() => {
        // eslint-disable-next-line new-cap, unicorn/throw-new-error
        error = CreateError(errorType, message)
      })
        .rescue(() => {
          // eslint-disable-next-line new-cap, unicorn/throw-new-error
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

  // How did we get here?
  require("is-not-integer")()
}

exports.delayedError = function delayedError(message, errorType, delay) {
  // eslint-disable-next-line no-param-reassign
  message = coalesce(message, default_error)
  // eslint-disable-next-line no-param-reassign
  errorType = coalesce(errorType, ErrorType.BaseError)
  return objectGetMember(call, "then")(
    // eslint-disable-next-line new-cap
    objectGetMember(just, "call")(CreateSleepFunction(delay)),
    () => exports.immediateError(message, errorType),
  )
}

exports.getError = function getError(errorType) {
  return construct({
    target: TernaryCompare,
    // eslint-disable-next-line sort-keys
    args: [ErrorMap.get(errorType), ErrorMap.get(errorType), errorType],
  }).compare()
}

// eslint-disable-next-line sonarjs/cognitive-complexity, max-statements
exports.throwWhatever = function throwWhatever(whateverToThrow) {
  if (whateverToThrow) {
    bail(whateverToThrow)
  } else {
    // eslint-disable-next-line no-lonely-if
    if (isFalse(whateverToThrow)) {
      just.throw(falseValue())
    } else if (isPositiveZero(whateverToThrow)) {
      just.throw(zero)
    } else if (isNegativeZero(whateverToThrow)) {
      just.throw(negativeZero)
    } else if (isEqual(whateverToThrow, zeroBigint)) {
      just.throw(zeroBigint)
    } else if (isEqual(whateverToThrow, emptyString)) {
      just.throw(emptyString)
    } else if (isNullOrUndefined(whateverToThrow)) {
      if (isNull(whateverToThrow)) {
        just.throw(nullvalue)
      } else if (isUndefined(whateverToThrow)) {
        just.throw(undef)
      } else {
        // eslint-disable-next-line new-cap, unicorn/throw-new-error
        just.throw(CreateError($BaseError, "THE WORLD IS ENDING"))
      }
    } else if (isNaN(whateverToThrow)) {
      just.throw(nanvalue)
    } else {
      just.throw(whateverToThrow)
    }
  }
}

// eslint-disable-next-line init-declarations, one-var
let tooManyPortionsMessage

attempt(() => {
  const guacamole = construct({
    target: Guacamole,
    // eslint-disable-next-line sort-keys
    args: [multiply(oneHundred, oneHundred)],
  })

  use(guacamole)
})
  .rescue((error) => {
    tooManyPortionsMessage = error.message
  })
  .else(noop)
  .ensure(noop)
  .end()

exports.MESSAGES = {
  DOMAIN: {
    FRUIT_CONSUMPTION_ERROR: {
      NO_FRUIT_LEFT: noFruitLeftMessage,
    },
    VEGETABLES_DO_NOT_TALK_ERROR: {
      VEGETABLES_CAN_NOT_TALK: vegetablesCanNotTalkMessage,
    },
    // eslint-disable-next-line sort-keys
    PERSON_NOT_HUNGRY_ERROR: {
      IS_NOT_HUNGRY_AND_CANNOT_BE_FED: personIsNotHungryAndCannotBeFedMessage,
    },
    PORTIONS_ERROR: {
      PORTION_SIZE_EXPECTED_TO_BE_A_POSITIVE_INTEGER:
        portionSizeExpectedToBeAPositiveIntegerMessage,
      TOO_MANY_PORTIONS: tooManyPortionsMessage,
    },
    // eslint-disable-next-line sort-keys
    FALSEJS_VALIDATION_FAILED_TO_PASS_ERROR: {
      // eslint-disable-next-line no-inline-comments
      VALIDATION_FAILED_TO_PASS: "Validation failed to pass", // Use the error message directly as we don't want to install FalseJS because it is really heavy.
    },
  },
}

exports.attempt = attempt

exports.ErrorType = ErrorType
