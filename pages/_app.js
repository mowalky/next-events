import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Notification from "../components/ui/notification";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Notification title="test" message="this is a test" status="success" />
    </Layout>
  );
}

export default MyApp;
