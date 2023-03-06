import { Guards } from "shulga-app-core"

export const useCopyClickboard = () => {
  return async (value: string | number | undefined, cb?: () => void) => {
    try {
      // TODO: check browser permissions
      // TODO: error handling
      if(Guards.isString(value) || Guards.isNumber(value)) {
        await globalThis.navigator.clipboard.writeText(`${value}`)

        if(Guards.isFunc(cb)) {
            cb()
        }
      }
    } catch (err) {}
  }
}
