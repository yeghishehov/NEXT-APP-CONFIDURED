import { Store } from "src/store";

export class Test {
    constructor(private store: Store) {}
    public do() {
        console.log("it's ok 1", this.store.appState.ok);
    }
    public destructor() {
        console.log("destruct 1");
    }
}
