<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)

MyJourneys
├─ .cache                  # Archivos temporales generados durante el desarrollo (ignorar en control de versiones)
├─ .git                    # Directorio de control de versiones Git
├─ .gitignore              # Archivo que especifica archivos y directorios ignorados por Git
├─ README.md               # Documentación del proyecto en formato MarkDown
├─ gatsby-config.js        # Archivo de configuración principal de Gatsby
├─ node_modules            # Dependencias del proyecto
│─ package-lock.json       # Bloqueo de versión específica de las dependencias
├─ package.json            # Configuración de Node.js y npm
├─ public                  # Directorio donde Gatsby genera el sitio estático final
│  ├─ page-data
│  │  ├─ 404.html
│  │  │  └─ page-data.json
│  │  ├─ dev-404-page
│  │  │  └─ page-data.json
│  │  └─ index
│  │     └─ page-data.json
│  ├─ static               # Archivos estáticos que se copian directamente al directorio de salida
│  │  ├─ cusco-ec39ee3a36c88f9fb4c7818b0613861c.svg
│  │  └─ subscribe-to-my-journeys-pop-up-6981bfc95f2415b54dbd4066433d0874.jpeg
│  └─ ~partytown           # Directorio relacionado con Partytown (ejecución de JavaScript del lado del cliente en un Worker)
│     ├─ debug
│     │  ├─ partytown-atomics.js
│     │  ├─ partytown-media.js
│     │  ├─ partytown-sandbox-sw.js
│     │  ├─ partytown-sw.js
│     │  ├─ partytown-ww-atomics.js
│     │  ├─ partytown-ww-sw.js
│     │  └─ partytown.js
│     ├─ partytown-atomics.js
│     ├─ partytown-media.js
│     ├─ partytown-sw.js
│     └─ partytown.js
└─ src                    # Código fuente de la aplicación
   ├─ components          # Componentes React reutilizables
   │  ├─ Clock.jsx
   │  ├─ Header.jsx
   │  ├─ Layout.jsx
   │  ├─ NotificationPopup.jsx
   │  ├─ Preheader.jsx
   │  └─ SubscriptionPopup.jsx
   ├─ data                # Archivos de datos
   │  └─ initial-links.json
   ├─ images              # Imágenes utilizadas en el sitio
   │  ├─ .DS_Store
   │  ├─ bell.svg
   │  ├─ burger-menu.svg
   │  ├─ cusco.svg
   │  ├─ facebook-logo.svg
   │  ├─ header-logo.svg
   │  ├─ icon.png
   │  ├─ subscribe-to-my-journeys-pop-up.jpeg
   │  └─ twitter-logo.svg
   ├─ pages               # Páginas de la aplicación, como index.js y 404.js
   │  ├─ 404.js
   │  ├─ contact.html
   │  ├─ index copy.js   # Duplicado de seguridad del archivo index.js incial de instalación de Gatsby
   │  └─ index.js
   └─ styles              # Archivos de estilo CSS
      ├─ NotificationPopup.css
      ├─ SubscriptionPopup.css
      └─ styles.css
