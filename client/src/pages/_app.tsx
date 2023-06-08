import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Template from "@/components/layout/template";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}
