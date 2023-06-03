import { Store } from "src/store/store";

export class Test2 {
    constructor(private store: Store) {}
    public do() {
        console.log("it's ok 2 --start", this.store.appState.ok);
        this.store.appState.changeOk(!this.store.appState.ok);
        console.log("it's ok 2 --end", this.store.appState.ok);
    }
}
