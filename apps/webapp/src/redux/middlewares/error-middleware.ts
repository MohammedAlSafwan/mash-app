import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit"

import { AppDispatch } from "../store"

export const errorMiddleware = (): Middleware => {
  return (store: MiddlewareAPI<AppDispatch>) => next => (action: { type: string; payload?: { data: { message: string } } }) => {
    const { dispatch } = store
    const errorMessage = action.payload?.data?.message

    return next(action)
  }
}
