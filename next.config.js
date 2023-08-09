/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination:
          "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    ];
  },
};
