/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: "I said No 2020",
      titleTemplate: "%s · I said No 2020",
      description:
        "A silly cat who has been grumpy all year 2020",
      url: "https://www.doe.com", // No trailing slash allowed!
      image: "/images/grumpy.png", // Path to your image you placed in the 'static' folder
      twitterUsername: "@bolaji_xi",
    },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/script.js", // Change to the script filename
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'I said No 2020',
        short_name: 'IsaidNo2020 @bolajixi',
        description: 'A silly cat who has been grumpy all year 2020.',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icons: [
          {
            "src": "src/images/grumpy.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
