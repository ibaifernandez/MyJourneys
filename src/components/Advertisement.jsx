// Advertisement.jsx
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Advertisement = () => {
  return (
    <>
        <p className="advertisement-1-homepage">Advertisement</p>
        <a href="https://portfolio.ibaifernandez.com" target='_blank'>
            <div className="advertisement-container">
                <div className="advertisement-box">
                    <StaticImage
                    className="background-image"
                    src="../images/ibai-fernandez-advertisment.svg" // Ajusta la ruta según la ubicación de tu imagen de fondo
                    alt="Advertisement Background"
                    />
                    <div className="advertisement-content">
                        <div className="advertisement-logo-container">
                            <StaticImage
                                className="advertisement-logo"
                                src="../images/white-logo-if.svg" // Ajusta la ruta según la ubicación de tu logo
                                alt="Logo"
                            />
                        </div>
                        <div className="text-lines">
                        <p className="advertisement-title">Ibai Fernández</p>
                        <p className="advertisement-subtitle">Full-Stack Developer</p>
                        <p className="advertisement-tagline">React · Gatsby · Wordpress · SEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </>
  );
};
