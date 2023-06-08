declare type APITypes<T = unknown, E = error> = {
  data: T
  error: E
  message: string
}
