/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: true,
        relay: {
          src: "./app",
          language: "typescript",
          artifactDirectory: "__generated__"
        },
      },
      async headers() {
        return [
          {
            source: "/(.*?)",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" }, 
              { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ],
          },
        ]
      },
}

module.exports = nextConfig
