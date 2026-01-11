export enum ErrorType {
  BaseError = 0,
  EvalError = 1,
  RangeError = 2,
  ReferenceError = 3,
  SyntaxError = 4,
  TypeError = 5,
  URIError = 6,
  FruitConsumptionError = 7,
  VegetablesCannotTalkError = 8,
  PersonNotHungryError = 9
}

export type CustomError = {
  new (message: string): Error
}

export function getError(errorType: ErrorType.BaseError): typeof Error
export function getError(errorType: ErrorType.EvalError): typeof EvalError
export function getError(errorType: ErrorType.RangeError): typeof RangeError
export function getError(errorType: ErrorType.ReferenceError): typeof ReferenceError
export function getError(errorType: ErrorType.SyntaxError): typeof SyntaxError
export function getError(errorType: ErrorType.TypeError): typeof TypeError
export function getError(errorType: ErrorType.URIError): typeof URIError
export function getError(errorType: ErrorType.FruitConsumptionError): CustomError
export function getError(errorType: ErrorType.VegetablesCannotTalkError): CustomError
export function getError(errorType: ErrorType.PersonNotHungryError): CustomError
export function getError(errorType: ErrorType | CustomError): CustomError

export function immediateError(
  message?: string, 
  errorType?: ErrorType | CustomError
): never