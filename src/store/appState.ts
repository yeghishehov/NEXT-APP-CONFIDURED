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
    @action
    public hydrate = (data: Partial<AppState> | null) => {
        if (!data) return;

        if (data.ok) this.ok = Boolean(data.ok);
    };
}
