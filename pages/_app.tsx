import React from "react";
import { wrapper } from "../src/redux/store";

const MyApp = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
