import { enableStaticRendering } from "mobx-react";
import { createContext, FC, PropsWithChildren, useContext } from "react";

import { AppState } from "./appState";

enableStaticRendering(typeof window === "undefined");

export class Store {
    constructor(public appState = new AppState()) {}
}

const StoreContext = createContext<Store>({} as Store);

type StoreProviderType = FC<PropsWithChildren<{ store: Store }>>;

export const StoreProvider: StoreProviderType = ({ children, store }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
