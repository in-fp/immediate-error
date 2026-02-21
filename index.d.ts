// type definitions
export enum ErrorType {
  BaseError = 0,
  EvalError = 1,
  RangeError = 2,
  ReferenceError = 3,
  SyntaxError = 4,
  TypeError = 5,
  URIError = 6,
  FruitConsumptionError = 7,
  VegetablesDoNotTalkError = 8,
  PersonNotHungryError = 9,
  PortionsError = 10,
  FalseJSValidationFailedToPassError = 11
}
export type CustomError = {
  new (message: string): Error
}
export function getError(errorType: ErrorType.BaseError): typeof Error
export function getError(errorType: ErrorType.EvalError): typeof EvalError
export function getError(errorType: ErrorType.RangeError): typeof RangeError
export function getError(
  errorType: ErrorType.ReferenceError,
): typeof ReferenceError
export function getError(errorType: ErrorType.SyntaxError): typeof SyntaxError
export function getError(errorType: ErrorType.TypeError): typeof TypeError
export function getError(errorType: ErrorType.URIError): typeof URIError
export function getError(
  errorType: ErrorType.FruitConsumptionError,
): CustomError
export function getError(
  errorType: ErrorType.VegetablesDoNotTalkError,
): CustomError
export function getError(errorType: ErrorType.PersonNotHungryError): CustomError
export function getError(errorType: ErrorType.PortionsError): CustomError
export function getError(errorType: ErrorType.FalseJSValidationFailedToPassError): CustomError
export function getError(errorType: ErrorType | CustomError): CustomError
export function immediateError(
  message?: string,
  errorType?: ErrorType | CustomError,
): never
export function throwWhatever(whateverToThrow: any): never
export const attempt: {
  new (handler?: () => void): {
    trycode?: () => void
    rescuehandler?: (error: any) => void
    elsehandler?: () => void
    ensurehandler?: (error: any) => void
    rescue(handler: (error: any) => void): this
    else(handler: () => void): this
    ensure(handler: () => void): this
    end(): void
  }
  (handler?: () => void): {
    trycode?: () => void
    rescuehandler?: (error: any) => void
    elsehandler?: () => void
    ensurehandler?: (error: any) => void
    rescue(handler: (error: any) => void): this
    else(handler: () => void): this
    ensure(handler: () => void): this
    end(): void
  }
}
export function delayedError(
  message?: string,
  errorType?: ErrorType | CustomError,
  delay?: number,
): Promise<never>

export const MESSAGES: {
  DOMAIN: {
    FRUIT_CONSUMPTION_ERROR: { NO_FRUIT_LEFT: "no fruit left" }
    VEGETABLES_DO_NOT_TALK_ERROR: {
      VEGETABLES_CAN_NOT_TALK: "vegetables can not talk"
    }
    PERSON_NOT_HUNGRY_ERROR: {
      IS_NOT_HUNGRY_AND_CANNOT_BE_FED: "% is not hungry and cannot be fed"
    },
    PORTIONS_ERROR: {
      PORTION_SIZE_EXPECTED_TO_BE_A_POSITIVE_INTEGER: "Portion size expected to be a positive integer",
      TOO_MANY_PORTIONS: "Too many portions"
    },
    FALSEJS_VALIDATION_FAILED_TO_PASS_ERROR: {
      VALIDATION_FAILED_TO_PASS: "Validation failed to pass"
    }
  }
}
