import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { notoSansJpFontFamilyText } from '@/styles/fonts'

const customTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'teal' }),
  {
    fonts: {
      heading: notoSansJpFontFamilyText,
      body: notoSansJpFontFamilyText,
    },
    styles: {
      global: {
        'html, body': {
          padding: 0,
          margin: 0,
        },
      },
    },
    /**
     * @see https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/components
     * 各コンポーネントの階層情報は上記URLを参考に設定する
     */
    components: {},
  },
)

export default customTheme
