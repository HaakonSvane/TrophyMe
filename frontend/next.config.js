/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: true,
        relay: {
          src: "./app",
          language: "typescript",
        },
      },
}

module.exports = nextConfig
