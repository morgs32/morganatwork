import React from 'react';
import Head from 'next/head';

Index.propTypes = {};
Index.defaultProps = {};

export default function Index() {
  return (
    <>
      <Head>
        <title>Designs</title>
      </Head>
      <iframe
        title="Figma designs for morganatwork.com"
        style={{
          border: 'none',
          position: 'fixed',
        }}
        width="100%"
        height="100%"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ2g7dgfQbp9TLFLEJAKhqJUn%2FMorgan-at-Work%3Fnode-id%3D0%253A1"
        allowFullScreen
      />
    </>
  );
}

