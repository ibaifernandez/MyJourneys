module.exports = {
    siteMetadata: {
      title: `MyJourneys`,
      description: `Explore and share the most awesome journeys.`,
      siteUrl: `https://myjourneys.ibaifernandez.com`,
      author: `Ibai Fernández`,
      icon: `src/images/myjourneys.png`,
      keywords: [`travel`, `adventures`, `exploration`],
      lang: `en-US`,
      image: `src/images/myjourneys-preview.jpg`,
      twitter: {
        creator: `@ibaifernandezec`,
      },
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images/`,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-image',
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          output: `/sitemap.xml`,
          // exclude: ['/exclude-page-1', '/exclude-page-2'],
        },
      },
      // ... Otros plugins pueden ir aquí
    ],
  };
  