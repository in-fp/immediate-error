const {
  immediateError,
  ErrorType,
  throwWhatever,
  getError,
  MESSAGES
} = require("./index")

describe("immediateError utility", () => {
  test("throws a regular Error with default message when no arguments are passed", () => {
    expect(() => immediateError()).toThrow(Error)
    expect(() => immediateError()).toThrow("ERROR!")
  })

  test("throws a regular Error with a custom message", () => {
    expect(() => immediateError("Aaaaah")).toThrow(Error)
    expect(() => immediateError("Aaaaah")).toThrow("Aaaaah")
  })

  test.each([
    ["BaseError", ErrorType.BaseError, Error],
    ["EvalError", ErrorType.EvalError, EvalError],
    ["RangeError", ErrorType.RangeError, RangeError],
    ["ReferenceError", ErrorType.ReferenceError, ReferenceError],
    ["SyntaxError", ErrorType.SyntaxError, SyntaxError],
    ["TypeError", ErrorType.TypeError, TypeError],
    ["URIError", ErrorType.URIError, URIError],
  ])("throws % when specified", (name, type, constructor) => {
    expect(() => immediateError("test message", type)).toThrow(constructor)
  })

 test.each([
    ["FruitConsumptionError", ErrorType.FruitConsumptionError],
    ["VegetablesDoNotTalkError", ErrorType.VegetablesDoNotTalkError],
    ["PersonNotHungryError", ErrorType.PersonNotHungryError],
    ["PortionsError", ErrorType.PortionsError],
  ])("throws domain-specific % correctly", (name, type) => {
    const expectedConstructor = getError(type)
    expect(() => immediateError("enterprise failure", type)).toThrow(expectedConstructor)
    expect(() => immediateError("enterprise failure", type)).toThrow("enterprise failure")
  })

  test("throws a custom user-defined Error class", () => {
    class MyCustomError extends Error {
      constructor(message) {
        super("Custom: " + message)
        this.name = "MyCustomError"
      }
    }

    expect(() => immediateError("Error!", MyCustomError)).toThrow(MyCustomError)
    expect(() => immediateError("Error!", MyCustomError)).toThrow(
      "Custom: Error!",
    )
  })

  test("captures stack trace correctly and hides internal frames", () => {
    try {
      immediateError("stack check")
    } catch (error) {
      expect(error.stack).not.toMatch(/at immediateError/)
    }
  })
})

const { attempt } = require("./index")

describe("attempt utility", () => {
  test("works as a standard function", () => {
    let called = false
    attempt(() => {
      called = true
    }).end()
    expect(called).toBe(true)
  })

  test("works as a constructor returning an instance", () => {
    const instance = new attempt(() => {})
    expect(instance).toBeDefined()
    expect(typeof instance.rescue).toBe("function")
  })

  test("triggers rescue when the handler fails", () => {
    let errorCaught = false
    attempt(() => {
      throw new Error("fail")
    })
      .rescue((e) => {
        errorCaught = true
        expect(e.message).toBe("fail")
      })
      .end()
    expect(errorCaught).toBe(true)
  })

  test("triggers else only when the handler succeeds", () => {
    let elseCalled = false
    attempt(() => {
      return "success"
    })
      .else(() => {
        elseCalled = true
      })
      .end()
    expect(elseCalled).toBe(true)
  })

  test("triggers ensure regardless of success or failure", () => {
    let counter = 0

    attempt(() => {})
      .ensure(() => {
        counter++
      })
      .end()

    attempt(() => {
      throw new Error()
    })
      .rescue(() => {})
      .ensure(() => {
        counter++
      })
      .end()

    expect(counter).toBe(2)
  })

  test("returns this (the instance) from chaining methods", () => {
    const a = attempt(() => {})
    const b = a.rescue(() => {})
    const c = b.else(() => {})
    const d = c.ensure(() => {})

    expect(a).toBe(d)
  })
})

const { delayedError } = require("./index")

describe("delayedError utility", () => {
  const SHORT_DELAY = 10

  test("throws the error after a specified delay", async () => {
    const start = Date.now()

    try {
      await delayedError("Delayed fail", ErrorType.BaseError, SHORT_DELAY)
    } catch (error) {
      const duration = Date.now() - start
      expect(duration).toBeGreaterThanOrEqual(SHORT_DELAY)
      expect(error.message).toBe("Delayed fail")
    }
  })

  test("uses default error message and type if only delay is provided", async () => {
    try {
      await delayedError(undefined, undefined, SHORT_DELAY)
    } catch (error) {
      expect(error.message).toBe("ERROR!")
      expect(error).toBeInstanceOf(Error)
    }
  })

  test("respects custom error types in delayed mode", async () => {
    try {
      await delayedError("Type fail", ErrorType.TypeError, SHORT_DELAY)
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError)
      expect(error.message).toBe("Type fail")
    }
  })
})

describe("throwWhatever utility", () => {
  test("throws a standard error object when passed", () => {
    const err = new Error("standard fail")
    expect(() => throwWhatever(err)).toThrow("standard fail")
  })

  test("throws primitive false when passed false", () => {
    try {
      throwWhatever(false)
    } catch (e) {
      expect(e).toBe(false)
    }
  })

  test("throws primitive zero when passed 0", () => {
    try {
      throwWhatever(0)
    } catch (e) {
      expect(e).toBe(0)
    }
  })

  test("throws a string directly when passed a string", () => {
    expect(() => throwWhatever("Direct String")).toThrow("Direct String")
  })

  test("integrates with getError for custom domain errors", () => {
    const FruitError = getError(ErrorType.FruitConsumptionError)
    const err = new FruitError("Too many apples")
    expect(() => throwWhatever(err)).toThrow(FruitError)
  })
})

describe("getError utility", () => {
  test("returns the intrinsic Error constructor for BaseError", () => {
    const result = getError(ErrorType.BaseError)
    expect(result).toBe(Error)
  })

  test("returns the intrinsic TypeError constructor for TypeError", () => {
    const result = getError(ErrorType.TypeError)
    expect(result).toBe(TypeError)
  })

  test("successfully extracts FruitConsumptionError from jsfruit logic", () => {
    const FruitError = getError(ErrorType.FruitConsumptionError)
    expect(typeof FruitError).toBe("function")
    const instance = new FruitError("test")
    expect(instance).toBeInstanceOf(Error)
  })

  test("successfully extracts PersonNotHungryError from libperson logic", () => {
    const HungerError = getError(ErrorType.PersonNotHungryError)
    expect(typeof HungerError).toBe("function")
    expect(new HungerError()).toBeDefined()
  })

  test("successfully extracts PortionsError from libguacamole logic", () => {
    const GuacError = getError(ErrorType.PortionsError)
    expect(typeof GuacError).toBe("function")
    expect(GuacError.name).toBe("PortionsError")
  })

  test("returns the same constructor when passed a constructor (identity)", () => {
    class MyError extends Error {}
    const result = getError(MyError)
    expect(result).toBe(MyError)
  })
})

describe("error messages", () => {
  test.each([
    ["no fruit left", MESSAGES.DOMAIN.FRUIT_CONSUMPTION_ERROR.NO_FRUIT_LEFT],
    ["vegetables can not talk", MESSAGES.DOMAIN.VEGETABLES_DO_NOT_TALK_ERROR.VEGETABLES_CAN_NOT_TALK],
    ["% is not hungry and cannot be fed", MESSAGES.DOMAIN.PERSON_NOT_HUNGRY_ERROR.IS_NOT_HUNGRY_AND_CANNOT_BE_FED],
    ["Portion size expected to be a positive integer", MESSAGES.DOMAIN.PORTIONS_ERROR.PORTION_SIZE_EXPECTED_TO_BE_A_POSITIVE_INTEGER],
    ["Too many portions", MESSAGES.DOMAIN.PORTIONS_ERROR.TOO_MANY_PORTIONS]
  ])("provides error message \"%s\" correctly", (a, b) => {
    expect(a).toEqual(b)
  })
})
