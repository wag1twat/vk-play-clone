import React from 'react'
import { useToast as useChakraToast, UseToastOptions, ToastMessage } from '@chakra-ui/react'
import { ToastLayout } from './ui'

export const useToast = () => {
  const toast = useChakraToast()

  const system = React.useCallback(
    (Content: ToastMessage, options: UseToastOptions = {}) => {
      toast({
        containerStyle: {
          background: 'blue.toast-bg',
          borderRadius: 10,
          px: 4,
          ...options.containerStyle,
        },
        render(props) {
          return <ToastLayout>{Content(props)}</ToastLayout>
        },
        ...options,
      })
    },
    [toast]
  )

  return { system }
}
