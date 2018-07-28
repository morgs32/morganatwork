import App, { Container } from 'next/app'
import React from 'react'
import Header from '../components/Header'
import 'app/styles/styles.scss'

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps,
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Header />
        <main>
          <Component {...pageProps} />
          <style jsx global>{`
            * {
              font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
            }
            body {
              margin: 0;
              font-size: 16px;
              padding: 1.5rem 4rem;
            }
            a {
              color: #22BAD9;
            }
            p {
              font-size: 14px;
              line-height: 24px;
            }
            article {
              margin: 0 auto;
              max-width: 650px;
            }
            button {
              align-items: center;
              background-color: #22BAD9;
              border: 0;
              color: white;
              display: flex;
              padding: 5px 7px;
            }
            button:active {
              background-color: #1B9DB7;
              transition: background-color .3s
            }
            button:focus {
              outline: none;
            }
          `}
          </style>
        </main>

      </Container>
    )
  }
}