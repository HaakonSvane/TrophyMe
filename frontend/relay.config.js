module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: "./app",
    language: "typescript", // "javascript" | "typescript" | "flow"
    schema: "../backend/api/schema.graphql",
    excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  }