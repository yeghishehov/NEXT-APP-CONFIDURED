import "src/styles/globals.css";
import type { AppProps } from "next/app";

import { ServiceProvider } from "src/service";
import { StoreProvider } from "src/store";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider {...pageProps}>
            <ServiceProvider>
                <Component {...pageProps} />
            </ServiceProvider>
        </StoreProvider>
    );
}
