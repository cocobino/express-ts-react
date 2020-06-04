import { observable } from "mobx";

class ModalViewModel {
    @observable private onoff:boolean = false;

    constructor() {}

    showModal() {
        this.onoff = true;
    }

    closeModal() {
        this.onoff = false;
    }

    get getOnOff() {
        return this.onoff;
    }
}

export default new ModalViewModel();