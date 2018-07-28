import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>Morgan at Work</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <link href="/static/nprogress.css" rel="stylesheet" type="text/css" async />
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}