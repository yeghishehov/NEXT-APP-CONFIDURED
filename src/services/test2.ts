import { Store } from "src/store";

export class Test2 {
    constructor(private store: Store) {}
    public do() {
        console.log("it's ok 2", this.store.appState.ok);
    }
}
