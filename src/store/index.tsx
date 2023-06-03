import { enableStaticRendering } from "mobx-react";
import { createContext, FC, PropsWithChildren, useContext } from "react";

import { InitialStateDataType, Store } from "./store";

enableStaticRendering(typeof window === "undefined");

const StoreContext = createContext<{ store: Store }>({ store: {} as Store });
let _store: Store;

function initializeStore(initialStateData: InitialStateDataType = null) {
    const store = _store ?? new Store();

    // for getServerSideProps
    if (initialStateData) {
        store.hydrate(initialStateData);
    }
    // For SSR always create a new store
    if (typeof window === "undefined") return store;
    // Create the store once in the client
    if (!_store) _store = store;

    return store;
}

type StoreProviderType = FC<PropsWithChildren<{ initialStateData: InitialStateDataType }>>;

export const StoreProvider: StoreProviderType = ({ children, initialStateData }) => {
    const store = initializeStore(initialStateData);
    return <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>;
};

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within StoreProvider");
    }
    return context;
}
