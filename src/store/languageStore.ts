import { action, makeObservable, observable } from "mobx";

class LanguageStore {
  language: "en" | "ko" = "en";

  setLanguage(lang: "en" | "ko") {
    if (this.language !== lang) {
      this.language = lang;
    }
  }

  changeLanguage() {
    if (this.language === "ko") {
      this.setLanguage("en");
    } else {
      this.setLanguage("ko");
    }
  }

  constructor() {
    makeObservable(this, {
      language: observable,
      setLanguage: action,
      changeLanguage: action,
    });
    this.setLanguage = this.setLanguage.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }
}

const languageStore = new LanguageStore();
export default languageStore;
