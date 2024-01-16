import React from 'react';
import Layout from '../components/Layout';
import "../styles/styles.css"
import Seo from '../components/Seo.jsx';
import { HomeHero } from '../components/HomeHero.jsx';
import { TopStories } from '../components/TopStories.jsx'
import { Advertisement } from '../components/Advertisement.jsx';
import { EditorsPick } from '../components/EditorsPick.jsx'

const HomePage = () => {
 
  return (
    <Layout>
        <HomeHero />
        <TopStories />
        <Advertisement />
        <EditorsPick />
        <Advertisement/>
    </Layout>
  );
};

export const Head = () => (
    <>
        <Seo title="Home" />
    </>
  );

export default HomePage;
