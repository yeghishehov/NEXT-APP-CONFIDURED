const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules.push({
      test: /\.(pcss)$/,
      use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          {
              loader: "css-loader",
              options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 1
              }
          },
          { loader: "postcss-loader", options: { sourceMap: true } }
      ]
    })
    return config
  }
}

module.exports = nextConfig