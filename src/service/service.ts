import { Store } from "src/store/store";

import { Test } from "./test";
import { Test2 } from "./test2";

export class Services {
    constructor(
        store: Store,
        public test = new Test(store),
        public test2 = new Test2(store), // public pp = new Test(store),
    ) {}
    public initialize() {
        this.test.do();
    }
    public destructor(): void {
        Object.values(this).forEach((service) => {
            service?.destructor?.();
        });
    }
}
