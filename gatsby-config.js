module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Chukwuka Ezem',
    // Main Site Title
    title: `Chukwuka Ezem | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer.`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/notchuks`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/chukwuka-ezem/`,
    // Content of the About Me section
    about: `I'm a motivated full-stack developer with some experience building and scaling web applcations across various domains. I am skilled in developing digital experiences using MongoDB, Node, TypeScript & React. I am also good team player and I have no problem meeting challenges. My interests include working in impact-focused teams, building, thinking and organizing user solutions and open-source contributions.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Lint',
        description:
          'A budgeting app built with React, Express, Postgres, Plaid & Typescript.',
        link: 'https://github.com/notchuks/lint',
      },
      {
        name: 'Tenerr',
        description:
          'An online marketplace for freelance services.',
        link: 'https://github.com/notchuks/tenerr',
      },
      {
        name: 'Catalog API',
        description:
          'A CRUD REST API for products built with Express, Typescript, Prometheus & Docker.',
        link: 'https://github.com/notchuks/product-catalog-api',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Business & Transport International',
        description: 'Software Developer & Seo, September 2020 - March 2023',
        link: 'http://businessandtransport.com',
      },
      {
        name: 'New Horizons',
        description: 'Software Engineering Intern, October 2019 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Typescript, Node.js, Express.js, React, Java, Spring, Python',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Git, Docker, Amazon Web Services (AWS), Microservices, API design',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
