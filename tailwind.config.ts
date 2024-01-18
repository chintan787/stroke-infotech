import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary:'var(--color-primary)',
      secondary:'var(--color-secondary)',
      white:'#fff',
      black:'#000',
      gray:'#ccc',
      lightRed:'#fff9fa',
      blue:'#14133B',
      
    },
    container:{
  //  screens:{
  //   sm : 'max-width: 640px;',
  //   md:'max-width: 768px;',
  //   lg:'max-width: 1024px;',
  //   xl:'max-width: 1280px;',
  //   '2xl':'max-width: 1536px;',
  //   '3xl':'max-width: 1320px;'
  //  }

    },
    // maxWidth:{
    //   xs: '320px',
    //   sm:'384px',
    //   md:'448px',
    //   lg:'512px',
    //   xl:'576px',
    //   '2xl':'672px',
    //   '3xl' :'768px',
    //   '8xl' : '1320px'
    // },
    extend: {
      fontFamily:{
        gilroy: ["var(--font-gilory)","system-ui", "sans-serif"],
        montserrat:["var(--font-montserrat)","system-ui", "sans-serif"],
        primaryFont:["var(--font-gilory)","system-ui", "sans-serif"],
        secondaryFont:["var(--font-plus-Jakarta-Sans)","system-ui", "sans-serif"],
        outfitFont:["var(--font-outfit)","system-ui", "sans-serif"]
        // default: ["var(--font)","sans-serif"],
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
