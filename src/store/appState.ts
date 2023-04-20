import { action, makeAutoObservable, observable } from "mobx";

export class AppState {
    public ok = false;
    constructor() {
        makeAutoObservable(this, {
            ok: observable,
        });
    }
    @action
    public changeOk(newValue: boolean): void {
        this.ok = newValue;
    }
}
