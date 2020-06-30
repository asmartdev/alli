import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: 'alli',
  taskQueue: 'async',
  globalStyle: "src/global/style.css",
  plugins: [
    postcss({
      plugins: [tailwindcss(), autoprefixer()]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
