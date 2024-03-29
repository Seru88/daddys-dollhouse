module.exports = {
  siteMetadata: {
    title: `Daddy's Dollhouse`,
    description: `An adult forum for fans of giant men and tiny women.`,
    author: `Seru`,
  },
  plugins: [
    'gatsby-plugin-top-layout',
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
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
        name: `Daddy's Dollhouse`,
        short_name: `DDH`,
        start_url: `/`,
        background_color: `#202023`,
        theme_color: `#D79459`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
