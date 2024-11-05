export interface Response<T = undefined, TError = undefined> {
  success: boolean;
  data?: T;
  error?: TError;
}
