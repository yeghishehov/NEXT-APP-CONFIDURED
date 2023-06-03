import { FC, PropsWithChildren, createContext, useContext, useEffect } from "react";

import { useStore } from "src/store";
import { Store } from "src/store/store";

import { Services } from "./service";
let _services: Services;

export function initializeServices(store: Store /*, API */): Services {
    const services = _services ?? new Services(store);

    if (typeof window === "undefined") return services;
    if (!_services) _services = services;
    return services;
}

const ServiceContext = createContext<{ service: Services }>({ service: {} as Services });

type ServiceProviderType = FC<PropsWithChildren>;

export const ServiceProvider: ServiceProviderType = ({ children }) => {
    const { store } = useStore();
    const service = initializeServices(store);

    useEffect(() => {
        service.initialize();
        return () => {
            service.destructor();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ServiceContext.Provider value={{ service }}>{children}</ServiceContext.Provider>;
};

export function useService() {
    const context = useContext(ServiceContext);
    if (context === undefined) {
        throw new Error("useService must be used within ServiceProvider");
    }

    return context;
}
