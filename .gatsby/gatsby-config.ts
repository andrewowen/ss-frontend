import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.SANITY_PROJECT_ID)

export default {
    siteMetadata: {
        title: "Slick's Slices!",
        siteUrl: "https://localhost:8000",
        description: 'The best pizza place in Waynesboro!'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        }
    ]
}