import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Notification from "../components/ui/notification";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Notification title="test" message="this is a test" status="success" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
