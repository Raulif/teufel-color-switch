# TEUFEL COLOR SWITCH

## Description
This is a simple project to display a list of color variants for a product and allow the user to select one of them.<br />
The project is built with [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/) and [SCSS](https://sass-lang.com/).<br />
It has a simple translation system to support multiple languages.<br />
Local URL for development is http://localhost:5173/.



## Project setup
### Download
```
git clone git@github.com:Raulif/teufel-color-switch.git
```

### Install dependencies
```
npm install
```

### Compile with hot-reloads for development
```
npm run dev
```

### Compile and minify for production
```
npm run build
```

## Test locales
The app looks for a cookie named `switch-locale` to determine the locale to use. If the cookie is not found, the app will use the default locale, as defined in the `DEFAULT_LOCALE` constant in the `constants.ts file`, and set its value to the cookie for the next visit.<br />
To test the app with different locales, you can set the cookie to the desired locale. Just follow these steps:
  1. Delete the cookie `switch-locale` in your browser.
  2. Change the value of the `DEFAULT_LOCALE` constant in the `constants.ts` file.
  3. Reload the app.

## Caveats
The .env file should be ignored by git, as it contains sensitive information.<br />
The format of the price has been changed to make it compatible with the [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat). The original format is `€99,00`, but the Intl API returns to `99.00 €`. This change has been made consciously, since using the Intl API helps handling locales and currencies.

Created with :heart: by [Raul Iglesias](https://github.com/raulif)