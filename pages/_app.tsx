import "@styles/globals.css";
import "@styles/globals.module.sass";

import type { AppProps } from "next/app";
import { wrapper } from "@lib/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
