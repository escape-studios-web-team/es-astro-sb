/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          body: "'open-sans', sans-serif",
          condensed: "'open-sans-condensed', sans-serif",
        },
        colors: {
          orange: "#F56C00",
          darkorange: "#C25700",
          grey: "#767676",
          darkgrey: "#363636",
        },
        fontSize: {
          "1.5xl": "1.375rem",
          "2.2xl": "1.5625rem",
          "2.5xl": "1.625rem",
          "3.2xl": "2rem",
          "3.4xl": "2.125rem",
          "3.5xl": "2.1875rem",
          "4.2xl": "2.375rem",
          "4.5xl": "2.5rem",
          "4.75xl": "2.8125rem",
          "5.25xl": "3.125rem",
          "5.5xl": "3.4375rem",
          "6.2xl": "3.875rem",
          "6.9xl": "4.375rem",
          "7.2xl": "5rem",
          "7.5xl": "5.625rem",
          "8.2xl": "6.25rem",
          "8.8xl": "7.5rem",
        },
        typography: {
          DEFAULT: {
            css: {
              color: "#000000",
              maxWidth: "100%",
              fontWeight: '400',
              letterSpacing: '-0.2px',
              a: {
                color: "#C25700",
                fontWeight: "700",
                textDecoration: "underline",
                transitionDuration: "300ms",
                strong: {
                  fontWeight: "700",
                },
                "&:hover": {
                  color: "#F56C00!important",
                },
              },
              h1: { color: "#000000" },
              h2: { color: "#000000" },
              h3: { color: "#000000" },
              h4: { color: "#000000" },
              h5: { color: "#000000" },
              h6: { color: "#000000" },
              ul: {
                li: {
                  marginTop: "0.5em",
                  marginBottom: "0.5em",
                  paddingLeft: "0em",
                  "&::marker": { color: '#000000'},
                  p: {
                    margin: "0",
                  },
                },
              },
              ol: {
                li: {
                  marginTop: "0.5em",
                  marginBottom: "0.5em",
                  paddingLeft: "0em",
                  "&::marker": { color: '#000000'},
                  p: {
                    margin: "0",
                  },
                },
              },
              strong: {
                fontWeight: "700",
              },
              b: {
                fontWeight: "700",
              },
            },
          },
        },
        screens: {
          'xs': '475px',
          'xxs': '375px',
        },
        keyframes: {
          "hero-dots": {
            '0%': { left: '-100%' },
            '100%': { left: '0%' },
          },
          "logo-clouds-dots": {
            '0%': { left: '-100%' },
            '100%': { left: '0%' },
          }
        },
        animation: {
          "hero-dots": 'hero-dots 7s linear',
          "logo-clouds-dots": 'logo-clouds-dots 2s linear'
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }