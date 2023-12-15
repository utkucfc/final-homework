import { Provider } from "react-redux";
import { store } from "../redux/store";
import "@/styles/reset.css";
import "../styles/globals.css";
import Header from "@/components/Header";

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
            </Provider>
        </div>
    );
}
