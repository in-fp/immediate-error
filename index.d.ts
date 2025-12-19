export enum ErrorType {
  BaseError = 0,
  AggregateError = 1,
  AssertionError = 2,
  RangeError = 3,
  ReferenceError = 4,
  SyntaxError = 5,
  TypeError = 6,
  NativeAssertionError = 7
}

export type CustomError = {
  new (message: string): never
}

export function immediateError(
  message: string, 
  errorType?: ErrorType | CustomError
): never