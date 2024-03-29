const path = require("path");

module.exports = {
  pathPrefix: "/a-new-model-of-biological-education-and-research",
  siteMetadata: {
    siteUrl:
      "https://open-biology-university.github.io/a-new-model-of-biological-education-and-research",
    title: "A New Model Of Biological Education And Research",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        // resolveModules: [],
        "@": path.join(__dirname, "src"),
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layout/index.tsx"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
