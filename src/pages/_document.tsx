import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
            />
            <meta name="theme-color" content="#00000" />

            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

            <title>Junus</title>
            <meta name="description" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&family=Spline+Sans:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.cdnfonts.com/css/tt-firs-neue-trl"
              rel="stylesheet"
            ></link>
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="application-name" content="Junes" />
            <meta name="apple-mobile-web-app-title" content="Junes" />
            <meta name="msapplication-TileColor" content="#b91d47" />
            <meta name="theme-color" content="#38404f" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/apple-touch-icon.png"
            />
            <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="default"
            />
            <meta name="apple-mobile-web-app-title" content="Junes" />
            <link
              rel="icon"
              type="image/png"
              sizes="64x64"
              href="/images/favicon-64x64.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <link
              rel="mask-icon"
              href="/images/safari-pinned-tab.svg"
              color="#ff0420"
            />

            <meta name="msapplication-tap-highlight" content="no" />

            <link rel="shortcut icon" href="/favicon.ico" />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
