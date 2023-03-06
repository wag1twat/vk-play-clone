import React from 'react'

export const useMutateRef = <T extends unknown>(
  ref: React.MutableRefObject<T | null> | ((instance: T) => void) | null,
  next: T,
  deps?: React.DependencyList | undefined
) => {
  React.useLayoutEffect(() => {
    if (ref !== null) {
      if (typeof ref === 'object') {
        ref.current = next
      }
      if (typeof ref === 'function') {
        ref(next)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
