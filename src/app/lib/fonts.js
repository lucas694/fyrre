// lib/fonts.js
import localFont from 'next/font/local';

export const generalSans = localFont({
  src: [
    {
      path: '../../../public/fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-VariableItalic.woff2',
      weight: '200 700',
      style: 'italic',
    },
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

