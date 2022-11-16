import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { Suspense, useEffect } from "react";
import theme from "../src/theme";
import { I18nextProvider } from "react-i18next";
import { useGlobals } from "@storybook/client-api";
import { i18n } from "./i18next";
import { action } from "@storybook/addon-actions";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

// addDecorator((storyFn) => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     {storyFn()}
//     </ThemeProvider>
// ));

// export const decorators = [
//   (Story) => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Story />
//     </ThemeProvider>
//   ),
// ];

// export const decorators = [<ThemeProvider theme={theme}>
//   <CssBaseline />
//   {story()}
//   </ThemeProvider>]

export const parameters = {
  actions: {
    theme,
    argTypesRegex: "^on[A-Z].*",
  },
  // docs: {
  //   theme,
  //   container: ({ children, context }) => (
  //     <DocsContainer context={context}>
  //       <ThemeProvider theme={theme}>
  //        {/* <CssBaseline /> */}
  //        {children}
  //        </ThemeProvider>
  //      </DocsContainer>
  //    ),
  // },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // theme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
  i18n,
  options: {
    storySort: {
      order: ["Atoms", "Molecules", "Organisms", ["Default"]],
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en-GB",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en-GB", right: "🇺🇸", title: "English" },
        { value: "de-DE", right: "🇩🇪", title: "German" },
      ],
    },
  },
};

const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Box sx={{ margin: { xs: 0, sm: 0, md: 2 } }}>
      <Story />
    </Box>
  </ThemeProvider>
);

const withTranslations = (Story, context) => {
  const [{ locale }] = useGlobals();
  console.log("withTranslations", context.globals.locale);

  useEffect(() => {
    if (locale) {
      i18n?.changeLanguage(locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};

export const decorators = [
  (Story) => {
    return (
      <div>
        <Suspense fallback={<div>decorator loading</div>}>
          <Story />
        </Suspense>
      </div>
    );
  },
  withMuiTheme,
  withTranslations,
];
