import * as React from 'react'
import invariant from 'invariant'

export default (cb: any) => ({
  onError: (e: any) => {
    if (typeof cb === 'function') {
      cb()
      return
    }
    if (typeof cb === 'undefined') {
      console.log(e.message || e)
      return
    }
    invariant(
      typeof cb === 'function' || typeof cb === 'undefined',
      'The parameter of dva-error-handler should be a function or set to empty as to default to `console.log` error Message'
    )
  }
})