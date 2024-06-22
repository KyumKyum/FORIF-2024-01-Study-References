import { makeAutoObservable } from "mobx";

class NameStore {
  name: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const nameStore = new NameStore();
export default nameStore;
