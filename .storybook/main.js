const path = require("path");

module.exports = {
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react", // OR whatever framework you're using

  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.tsx",
    "../src/stories/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    //"@storybook/addon-interactions",
    // "@storybook/addon-essentials",
    // "@storybook/addon-docs",
    // "@storybook/preset-create-react-app",
    // "@storybook/addon-a11y",
    // "@storybook/addon-viewport",
  ],
  features: {
    storyStoreV7: true,
    emotionAlias: false,
  },
  webpackFinal: async (config, { configType }) => {
    const emotionReactEleven = path.dirname(
      require.resolve("@emotion/react/package.json")
    );
    const emotionStyledEleven = path.dirname(
      require.resolve("@emotion/styled/package.json")
    );
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@emotion/core": emotionReactEleven,
        "@emotion/styled": emotionStyledEleven,
        "emotion-theming": emotionReactEleven,
      },
    };
    config.module.rules.push({
      // Config for js and jsx files
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              // use @babel/preset-react for JSX and env (instead of staged presets)
              require.resolve("@babel/preset-react"),
              require.resolve("@babel/preset-env"),
            ],
            plugins: [
              // use @babel/plugin-proposal-class-properties for class arrow functions
              [
                require.resolve("@babel/plugin-proposal-class-properties"),
                { loose: true },
              ],
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve("babel-plugin-remove-graphql-queries"),
              // use babel-plugin-react-docgen to ensure PropTables still appear
              require.resolve("babel-plugin-react-docgen"),
            ],
          },
        },
      ],
      exclude: [/node_modules\/(?!(gatsby)\/)/],
    });

    return config;
  },
};
