import { createContext, FC, PropsWithChildren } from "react";
import { enableStaticRendering } from "mobx-react";

import { AppState } from "./appState";

enableStaticRendering(typeof window === "undefined");

export class Store {
    constructor(public appState = new AppState()) {}
}

const StoreContext = createContext<Store>({} as Store);

// export type StoreProviderType = FC<PropsWithChildren<Store>>;
// export const StoreProvider: StoreProviderType = ({ children,  }) => {
//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   );
// };
 
// export const useStore = () => useContext(StoreContext);
 