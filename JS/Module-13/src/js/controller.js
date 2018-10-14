
import { LOCALSTORAGE } from "./services/localStorage";
// import { format } from "path";

const regExp = /^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/;  //source from http://qaru.site/questions/642495/regular-expression-for-checking-website-url

export default class controller {
  constructor(Model, View) {
    this._model = Model;
    this._view = View;
    this._view.refs.submitButton.addEventListener(
      "click",
      this.SubmitHandler.bind(this)
    );
    this._view.refs.cardsWrapper.addEventListener(
      "click",
      this.RemoveBookmarkHandler.bind(this)
    );
    this._view.refs.inputForm.addEventListener("submit", (e)=>{e.preventDefault()});
    this._view.displayAll(
      this._model.items,
      this._view.refs.cardsWrapper,
      this._view.refs.template
    );
  }

  SubmitHandler(e) {
    e.preventDefault();
    if (!this._view.refs.input.value.match(regExp)) {
      alert('Введенный адрес не поддерживается.');
      return;
    };
    this._model
      .addBookmark(this._view.refs.input.value)
      .then(() => {
        this._view.displayAll(
          this._model.items,
          this._view.refs.cardsWrapper,
          this._view.refs.template
        );
      }).catch((err)=>console.log("Error while fetching, status err:", err));
  }

  RemoveBookmarkHandler(e) {
    e.preventDefault();
    const target = e.target;

    const nodeName = target.nodeName;
    const elemClass = target.classList.contains("remove");

    if (nodeName !== "BUTTON" && !elemClass) return;
    
    const url = target.parentNode
      .querySelector("span")
      .textContent.replace("URL: ", "");
      console.log(url);
    const index = this._model.items.findIndex(elem => {
      if (url === elem.url) return true;
    });
    this._model.items.splice(index, 1);
    LOCALSTORAGE.remove(url);
    this._view.displayAll(
      this._model.items,
      this._view.refs.cardsWrapper,
      this._view.refs.template
    );
  }
}
