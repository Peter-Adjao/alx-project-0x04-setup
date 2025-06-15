import { Provider } from "react-redux";
import  store  from "@/store/store";
import Header from "@/components/layouts/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
     <Provider store={store}>
    <CountProvider>
      <div>
      <Header/>
        <Component {...pageProps} />
        </div>
    </CountProvider>
    </Provider>
  );
}