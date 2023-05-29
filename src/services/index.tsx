import { FC, PropsWithChildren, createContext, useContext } from "react";

import { Store } from "src/store";

import { Test } from "./test";
import { Test2 } from "./test2";

export interface IServices {
    readonly test: Test;
    readonly test2: Test2;
}

export function createServices(store: Store /*, API */): IServices {
    return {
        test: new Test(store /*, API */),
        test2: new Test2(store /*, API */),
    };
}

export class ServicesFacade {
    constructor(public services: IServices) {}
    public initialize() {
        this.services.test.do();
    }
    public destructor(): void {
        Object.values(this.services).forEach((service) => {
            service?.destructor?.();
        });
    }
}

const ServicesContext = createContext<IServices>({} as IServices);

type ServicesProviderType = FC<PropsWithChildren<{ services: IServices }>>;

export const ServicesProvider: ServicesProviderType = ({ children, services }) => {
    return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
};

export const useServices = () => useContext(ServicesContext);
