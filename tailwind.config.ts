import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary:"var(--color-primary)",
      secondary:"var(--color-secondary)",
      white:"#fff",
      // black:'#000',
      black:"var(--color-secondary)",
      gray:'#ccc',
      // lightRed:"#FF2449",
      lightRed:'#fff9fa',
      blue:"#14133B",
      
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

    extend: {
      fontFamily:{
        gilroy: ["var(--font-gilory)","system-ui", "sans-serif"],
        primaryFont:["var(--font-poppins)","system-ui", "sans-serif"],
        secondaryFont:["var(--font-ptSans)","system-ui", "sans-serif"],
        outfitFont:["var(--font-ptSans)","system-ui", "sans-serif"],
        nunitoFont:["var(--font-nunito)","system-ui", "sans-serif"]
       
      }
      
    },
  },
  plugins: [],
}
export default config
