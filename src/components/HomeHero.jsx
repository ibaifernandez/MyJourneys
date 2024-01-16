import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import heroArticleData from '../data/hero-article.json'

export const HomeHero = () => {

    return (
    <section className="hero">
        <StaticImage
            className="hero-img"
            src="../images/cusco.svg"
            alt={heroArticleData.heroArticle.image.alt}
        />
        <div className="hero-meta">
            <span className="hero-date">{heroArticleData.heroArticle.meta.date}</span>
            <span className="dot">·</span>
            <span className="hero-category"><Link to="/travel">{heroArticleData.heroArticle.meta.category.text}</Link></span>
        </div>
        <h2 className="hero-title"><Link to={heroArticleData.heroArticle.title.link}>{heroArticleData.heroArticle.title.text}</Link></h2>
        <p className="hero-summary">{heroArticleData.heroArticle.content}</p>
        <p className="hero-author">by <strong>{heroArticleData.heroArticle.author.name}</strong></p>
    </section>
    )
}