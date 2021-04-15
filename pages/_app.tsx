import App, { AppContext, AppProps } from "next/app";
import "../styles/index.css";
import Amplify from "aws-amplify";
import awsExports from "src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}