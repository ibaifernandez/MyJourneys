import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import topStoriesData from '../data/top-stories.json';



export const TopStories = ({data}) => {
    console.log("data", data)
  return (
    <section className="top-stories">
      <h3 className="top-stories-title">Top Stories</h3>
      <div className="top-stories-container">
        {data.allMdx.nodes.map((node, index) => (
          <div className="top-stories-item" key={node.id}>
            <div className="top-stories-meta">
              <span className="article-date">{node.frontmatter.date}</span>
              <span className="dot">·</span>
              <span className="category"><Link to="#">{node.frontmatter.category}</Link></span>
            </div>
            <div className="top-stories-news-content">
              <Link to="#">
                <h4 className="top-stories-news-title">{node.frontmatter.title}</h4>
              </Link>
              <p className="author">by <strong><Link to="#">{node.frontmatter.author}</Link></strong></p>
            </div>
            <div className="top-stories-image-container">
              <Link to={node.frontmatter.link}>
                {index === 0 && <StaticImage className="top-stories-image" src="../images/northern-lights-iceland.jpeg" alt={node.frontmatter.imageAlt} />}
                {index === 1 && <StaticImage className="top-stories-image" src="../images/silicon-valley.jpeg" alt={node.frontmatter.imageAlt} />}
                {index === 2 && <StaticImage className="top-stories-image" src="../images/tuscany-gastronomy.jpeg" alt={node.frontmatter.imageAlt} />}
                {index === 3 && <StaticImage className="top-stories-image" src="../images/serenity-in-bali.jpeg" alt={node.frontmatter.imageAlt} />}
                {index === 4 && <StaticImage className="top-stories-image" src="../images/fashion-capitals.jpeg" alt={node.frontmatter.imageAlt} />}
                {index === 5 && <StaticImage className="top-stories-image" src="../images/architectonic-marvels.jpeg" alt={node.frontmatter.imageAlt} />}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

