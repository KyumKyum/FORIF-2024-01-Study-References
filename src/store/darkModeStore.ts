import { action, makeObservable, observable } from "mobx";

class DarkModeStore {
  isDarkMode: boolean = false;

  setDarkMode(toDark: boolean) {
    if (this.isDarkMode !== toDark) {
      this.isDarkMode = toDark;
    }
  }

  constructor() {
    makeObservable(this, {
      isDarkMode: observable,
      setDarkMode: action,
    });
  }
}

const darkModeStore = new DarkModeStore();

export default darkModeStore;
