import { AppState } from "./appState";

export type InitialStateDataType = null | Partial<AppState>;

export class Store {
    constructor(public appState = new AppState()) {}
    // general hydrate
    public hydrate(data: InitialStateDataType) {
        this.appState.hydrate(data);
    }
}
