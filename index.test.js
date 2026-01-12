const { immediateError, ErrorType } = require("./index")

describe("immediateError utility", () => {

  // Basic Usage
  test("throws a regular Error with default message when no arguments are passed", () => {
    expect(() => immediateError()).toThrow(Error)
    expect(() => immediateError()).toThrow("ERROR!")
  })

  test("throws a regular Error with a custom message", () => {
    expect(() => immediateError("Aaaaah")).toThrow(Error)
    expect(() => immediateError("Aaaaah")).toThrow("Aaaaah")
  })

  // Native Error Types
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

  // Enterprise Domain-Specific Error Types
  test.each([
    ["FruitConsumptionError", ErrorType.FruitConsumptionError],
    ["VegetablesCannotTalkError", ErrorType.VegetablesCannotTalkError],
    ["PersonNotHungryError", ErrorType.PersonNotHungryError],
  ])("throws domain-specific %s correctly", (name, type) => {
    // We check that it throws an instance of the constructor cached in ErrorMap
    const expectedConstructor = require("./index").getError(type)
    expect(() => immediateError("enterprise failure", type)).toThrow(expectedConstructor)
    expect(() => immediateError("enterprise failure", type)).toThrow("enterprise failure")
  })

  // Custom Error Classes
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

  // Stack Trace Integrity
  test("captures stack trace correctly and hides internal frames", () => {
    try {
      immediateError("stack check")
    } catch (error) {
      // The first line of the stack should be the caller, not immediateError itself
      expect(error.stack).not.toMatch(/at immediateError/)
    }
  })
})

const { attempt } = require("./index")

describe("attempt utility", () => {
  // Pattern support
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

  // Logic Flow
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
    
    // Success case
    attempt(() => {})
      .ensure(() => {
        counter++
      })
      .end()
    
    // Failure case
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

  // Method Chaining
  test("returns this (the instance) from chaining methods", () => {
    const a = attempt(() => {})
    const b = a.rescue(() => {})
    const c = b.else(() => {})
    const d = c.ensure(() => {})
    
    expect(a).toBe(d)
  })
})

const { delayedImmediateError } = require("./index")

describe("delayedImmediateError utility", () => {
  // We use a small delay for testing
  const SHORT_DELAY = 10

  test("throws the error after a specified delay", async () => {
    const start = Date.now()
    
    // Since delayedImmediateError throws inside a promise chain/timeout, 
    // we catch it to verify the timing and error type.
    try {
      await delayedImmediateError("Delayed fail", ErrorType.BaseError, SHORT_DELAY)
    } catch (error) {
      const duration = Date.now() - start
      expect(duration).toBeGreaterThanOrEqual(SHORT_DELAY)
      expect(error.message).toBe("Delayed fail")
    }
  })

  test("uses default error message and type if only delay is provided", async () => {
    try {
      await delayedImmediateError(undefined, undefined, SHORT_DELAY)
    } catch (error) {
      expect(error.message).toBe("ERROR!")
      expect(error).toBeInstanceOf(Error)
    }
  })

  test("respects custom error types in delayed mode", async () => {
    try {
      await delayedImmediateError("Type fail", ErrorType.TypeError, SHORT_DELAY)
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError)
      expect(error.message).toBe("Type fail")
    }
  })
})