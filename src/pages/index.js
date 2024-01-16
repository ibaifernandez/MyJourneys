import React from 'react';
import Layout from '../components/Layout';
import "../styles/styles.css"
import Seo from '../components/Seo.jsx';
import { HomeHero } from '../components/HomeHero.jsx';
import {TopStories} from '../components/TopStories.jsx'
import { Advertisement } from '../components/Advertisement.jsx';
import { EditorsPick } from '../components/EditorsPick.jsx'
import { graphql } from 'gatsby';

const HomePage = ({data}) => {
    console.log("data", data)
 
  return (
    <Layout>
        <HomeHero />
        <TopStories data={data}/>
        <Advertisement />
        <EditorsPick />
    </Layout>
  );
};

export const query = graphql`
query MyQuery {
    allMdx(sort: {frontmatter: {date: ASC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          category
          author
          image
          imageAlt
        }
        id
        excerpt
      }
    }
  }`

export const Head = () => (
    <>
        <Seo title="Home" />
    </>
  );

export default HomePage;
