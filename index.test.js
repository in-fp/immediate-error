const { immediateError, ErrorType } = require("./index")

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
  ])("throws %s when specified", (name, type, constructor) => {
    expect(() => immediateError("test message", type)).toThrow(constructor)
  })

  test.each([
    ["FruitConsumptionError", ErrorType.FruitConsumptionError],
    ["VegetablesCannotTalkError", ErrorType.VegetablesCannotTalkError],
    ["PersonNotHungryError", ErrorType.PersonNotHungryError],
  ])("throws domain-specific %s correctly", (name, type) => {
    const expectedConstructor = require("./index").getError(type)
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
    expect(() => immediateError("Error!", MyCustomError)).toThrow("Custom: Error!")
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