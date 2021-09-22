import '../styles/globals.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return <SimpleReactLightbox>
    <Head>
      <title>Best car ever</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="best car ever"/>
      <link rel="icon" href="/car_3.ico"/>
    </Head>
    <Component {...pageProps} />
  </SimpleReactLightbox>

}

export default MyApp
