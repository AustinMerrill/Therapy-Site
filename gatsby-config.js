module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9n6sp5pj",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skkdBKxLtBC83x8VIqTfqepMPn5eTcj4Lq9AfaKe4IF7nD7e2VgiaJ1LaJEU4yEqdCbqSHDmA2hMZ83BNYDcdBJJzRI5WNmKleBt5KagCH6X5HFPa3eMHLAyt7EYvYepnD3I6DcCikElVHxuV0Gq8E1hxOeGbCJnodH2PIce7J7l1sWFeJMF",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
