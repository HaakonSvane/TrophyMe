/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: true,
        relay: {
          src: "./",
          language: "typescript",
          artifactDirectory: "./src/__generated__",
        },
      },
      async headers() {
        return [
          {
            source: "/(.*?)",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "http://localhost:5063" }, 
              { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ],
          },
        ]
      },
}

module.exports = nextConfig
