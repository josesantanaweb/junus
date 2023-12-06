
import type { AppProps } from "next/app";
import ThemeProvider, { ThemedGlobalStyle } from "../theme";
import Layout from "../components/Layout";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
