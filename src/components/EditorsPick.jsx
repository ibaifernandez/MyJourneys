import React from 'react';
import EditorsPickData from '../data/editors-pick-data.json';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const EditorsPick = () => {
  const { editorsPick, editorsPickMain, latestNews } = EditorsPickData;

  return (
    <section className="editors-pick-and-latest-news">
      <div className="editors-pick-container">
        <div className="editors-pick-left">
          {editorsPick.map((item, index) => (
            <div className="editors-pick-left-news" key={index}>
              <Link to={`/article/${index}`}>
                {index === 0 && <StaticImage src="../images/patagonia-secrets.jpeg" alt={item.imageAlt} />}
                {index === 1 && <StaticImage src="../images/silicon-valley.jpeg" alt={item.imageAlt} />}
              </Link>
              <div className="editors-pick-meta">
                <span className="editors-pick-date">{item.date}</span>
                <span className="dot">·</span>
                <span className="category">
                  <Link to={`/category/${item.category}`}>{item.category}</Link>
                </span>
              </div>
              <Link to={`/article/${index}`}>
                <h3 className="editors-pick-left-title">{item.title}</h3>
              </Link>
              <Link to={`/author/${item.author}`}>
                <p className="author">by <strong>{item.author}</strong></p>
              </Link>
            </div>
          ))}
        </div>

        <div className="editors-pick">
          <h2 className="editors-pick-section-title">Editor's Pick</h2>
          <div className="editors-pick-news-container">
            <div>
              <div className="editors-pick-meta">
                <span className="editors-pick-date">{editorsPickMain.date}</span>
                <span className="dot">·</span>
                <span className="category">
                  <Link to={`/category/${editorsPickMain.category}`}>{editorsPickMain.category}</Link>
                </span>
              </div>
              <Link to={`/article/main`}>
                <h3>{editorsPickMain.title}</h3>
              </Link>
              <p className="editors-pick-featured-newspiece-summary">{editorsPickMain.summary}</p>
              <p className="author featured-author">
                by <strong>{editorsPickMain.author}</strong>
              </p>
              <Link to={`/article/main`}>
                <StaticImage src="../images/malaga-sunset.jpeg" alt={editorsPickMain.imageAlt} />
              </Link>
            </div>
          </div>
        </div>

        <div className="editors-pick-latest">
          <h2 className="editors-pick-latest-section-title">Latest</h2>
          <div className="latest-mobile-container">
            {latestNews.map((item, index) => (
              <div className="editors-pick-latest-news-item" key={index}>
                <div className="editors-pick-latest-meta">
                  <span className="editors-pick-latest-date">{item.date}</span>
                  <span className="dot">·</span>
                  <span className="category">
                    <Link to={`/category/${item.category}`}>{item.category}</Link>
                  </span>
                </div>
                <Link to={`/article/${index}`}>
                  <h3>{item.title}</h3>
                </Link>
                <Link to={`/author/${item.author}`}>
                  <p className="author editors-pick-latest-author">
                    by <strong>{item.author}</strong>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
