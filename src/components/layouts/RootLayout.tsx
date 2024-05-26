'use client'

import { Box } from '@chakra-ui/react'
import { notoSansJp } from '@/styles/fonts'

import CustomProviders from '@/app/custom-providers'

export interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  console.debug('notoSansJp.variable', notoSansJp.className)
  return (
    <Box as="html" lang="ja-JP" h="100dvh">
      <Box as="body" w="100%" display="flex" flexDirection="column">
        <CustomProviders>
          <Box as="main" flexGrow="1" display="flex" flexDirection="column">
            {children}
          </Box>
        </CustomProviders>
      </Box>
    </Box>
  )
}