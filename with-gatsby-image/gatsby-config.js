module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        downloadLocalImages: true,
        endpoint: `https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
