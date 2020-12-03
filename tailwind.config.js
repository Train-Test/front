const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      display: ['Castoro', 'serif'],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.12'),
          paddingTop: theme('spacing.12'),
          // Breakpoints
          '@screen sm': {
            maxWidth: theme('screens.sm'),
            paddingInline: theme('spacing.12'),
            paddingTop: theme('spacing.24'),
            paddingBottom: theme('spacing.4'),
          },
          '@screen md': {
            maxWidth: theme('screens.md'),
            paddingInline: theme('spacing.32'),
            paddingTop: theme('spacing.24'),
            paddingBottom: theme('spacing.8'),
          },
          '@screen lg': {
            maxWidth: theme('screens.lg'),
            paddingInline: theme('spacing.40'),
            paddingTop: theme('spacing.32'),
            paddingBottom: theme('spacing.12'),
          },
          '@screen xl': {
            maxWidth: theme('screens.xl'),
            paddingInline: theme('spacing.64'),
            paddingTop: theme('spacing.32'),
            paddingBottom: theme('spacing.16'),
          },
        },
      })
    },
  ],
}
