'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import customTheme from '@/styles/chakraUiTheme'

export interface ChakraProvidersProps {
  children: React.ReactNode
}
function ChakraProviders({ children }: ChakraProvidersProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}

export default function CustomProviders({ children }: ChakraProvidersProps) {
  return (
    <ChakraProviders>
      {children}
    </ChakraProviders>
  )
}