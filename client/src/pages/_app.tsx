import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Template from "@/components/layout/template";
import ModalLoading from "./../components/ui/ModalLoading/Index";
import { useModalLoading } from "../store/hooks/index";

export default function App({ Component, pageProps }: AppProps) {
  const { stateModalLoading } = useModalLoading();
  return (
    <>
      <ModalLoading show={stateModalLoading} />
      <Template>
        <Component {...pageProps} />
      </Template>
    </>
  );
}
