require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `gem-project`,
    description: `Gem  Project`,
    author: `@GalPin-Ark`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Page2',
        link: '/page-2'
      },
      {
        name: 'Advanced',
        link: '/advanced'
      },
      {
        name: 'Error',
        link: '/404'
      },
      {
        name: 'Productos',
        link: '/skius'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-stripe",
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku"],
        secretKey: process.env.STRIPE_S_KEY,
        downloadFiles: true,
      },
    },
  ],
}
