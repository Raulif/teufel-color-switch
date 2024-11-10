# TEUFEL COLOR SWITCH

## Description
This is a simple project to display a list of color variants for a product and allow the user to select one of them.<br />
The project is built with [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/).<br />
It has a simple translation system to support multiple languages.<br />
Local URL for development is http://localhost:5173/.

## Download
```
git clone git@github.com:Raulif/teufel-color-switch.git
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

## Test locales
The app looks for a cookie named `switch-locale` to determine the locale to use. If the cookie is not found, the app will use the default locale, as defined in the `DEFAULT_LOCALE` constant in the `constants.ts file`, and set its value to the cookie for the next visit.<br />
To test the app with different locales, you can set the cookie to the desired locale. Just follow these steps:
  1. Delete the cookie `switch-locale` in your browser.
  2. Change the value of the `DEFAULT_LOCALE` constant in the `constants.ts` file.
  3. Reload the app.

Created with :heart: by [Raul Iglesias](https://github.com/raulif)