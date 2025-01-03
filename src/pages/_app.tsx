import "@/styles/globals.css";
import type { AppProps } from "next/app";

if (
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_USE_MOCKS === "true"
) {
  require("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
