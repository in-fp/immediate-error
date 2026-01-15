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
  PersonNotHungryError = 9,
}

export type CustomError = {
  new (message: string): Error
}

export function getError(errorType: ErrorType.BaseError): typeof Error
export function getError(errorType: ErrorType.EvalError): typeof EvalError
export function getError(errorType: ErrorType.RangeError): typeof RangeError
export function getError(
  errorType: ErrorType.ReferenceError
): typeof ReferenceError
export function getError(errorType: ErrorType.SyntaxError): typeof SyntaxError
export function getError(errorType: ErrorType.TypeError): typeof TypeError
export function getError(errorType: ErrorType.URIError): typeof URIError
export function getError(
  errorType: ErrorType.FruitConsumptionError
): CustomError
export function getError(
  errorType: ErrorType.VegetablesCannotTalkError
): CustomError
export function getError(errorType: ErrorType.PersonNotHungryError): CustomError
export function getError(errorType: ErrorType | CustomError): CustomError

export function immediateError(
  message?: string,
  errorType?: ErrorType | CustomError
): never

export function throwWhatever(whateverToThrow: any): never

interface AttemptConstructor {
  new (handler?: () => void): Attempt

  (handler?: () => void): Attempt
}

declare class Attempt {
  constructor(handler?: () => void)

  trycode?: () => void
  rescuehandler?: (error: any) => void
  elsehandler?: () => void
  ensurehandler?: (error: any) => void

  rescue(handler: (error: any) => void): this
  else(handler: () => void): this
  ensure(handler: () => void): this
  end(): void
}

export const attempt: AttemptConstructor

export function delayedError(
  message?: string,
  errorType?: ErrorType | CustomError,
  delay?: number
): Promise<never>

export function delayedError(
  message: undefined,
  errorType: undefined,
  delay: number
): Promise<never>