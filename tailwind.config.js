/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      Koruri: [
        'Koruri',
      ],
      SourceHanSansJP: [
        'SourceHanSansJP',
      ],
      kana: [
        'kana',
      ],
      DotGothic: [
        'DotGothic',
      ],
    }
  },
  plugins: [],
}

