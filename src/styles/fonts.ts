import { Inter, Noto_Sans_JP } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })
export const notoSansJpFontFamilyText = `${notoSansJp.style.fontFamily}, -apple-system, BlinkMacSystemFont,
Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
Helvetica Neue, sans-serif`