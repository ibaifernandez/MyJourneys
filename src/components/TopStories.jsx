import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import topStoriesData from '../data/top-stories.json';

export const TopStories = () => {
  return (
    <section className="top-stories">
      <h3 className="top-stories-title">Top Stories</h3>
      <div className="top-stories-container">
        {topStoriesData.map((article, index) => (
          <div className="top-stories-item" key={index}>
            <div className="top-stories-meta">
              <span className="article-date">{article.date}</span>
              <span className="dot">·</span>
              <span className="category"><Link to="#">{article.category}</Link></span>
            </div>
            <div className="top-stories-news-content">
              <Link to="#">
                <h4 className="top-stories-news-title">{article.title}</h4>
              </Link>
              <p className="author">by <strong><Link to="#">{article.author}</Link></strong></p>
            </div>
            <div className="top-stories-image-container">
              <Link to="#">
                {index === 0 && <StaticImage className="top-stories-image" src="../images/northern-lights-iceland.jpeg" alt={article.image.alt} />}
                {index === 1 && <StaticImage className="top-stories-image" src="../images/silicon-valley.jpeg" alt={article.image.alt} />}
                {index === 2 && <StaticImage className="top-stories-image" src="../images/tuscany-gastronomy.jpeg" alt={article.image.alt} />}
                {index === 3 && <StaticImage className="top-stories-image" src="../images/serenity-in-bali.jpeg" alt={article.image.alt} />}
                {index === 4 && <StaticImage className="top-stories-image" src="../images/fashion-capitals.jpeg" alt={article.image.alt} />}
                {index === 5 && <StaticImage className="top-stories-image" src="../images/architectonic-marvels.jpeg" alt={article.image.alt} />}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
