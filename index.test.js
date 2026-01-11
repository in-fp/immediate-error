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