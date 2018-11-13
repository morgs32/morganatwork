import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>Morgan at Work</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="/static/favicon.ico?v=2" />
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