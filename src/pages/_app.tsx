import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { createServices, ServicesFacade, ServicesProvider } from "src/services";
import { Store, StoreProvider } from "src/store";

const store = new Store();
const initServices = createServices(store);
const facadeServices = new ServicesFacade(initServices);
facadeServices.initialize();

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        return () => {
            facadeServices.destructor();
        };
    }, []);
    return (
        <StoreProvider store={store}>
            <ServicesProvider services={facadeServices.services}>
                <Component {...pageProps} />
            </ServicesProvider>
        </StoreProvider>
    );
}
