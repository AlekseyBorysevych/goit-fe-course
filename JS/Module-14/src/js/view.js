const refs = {
  input: document.querySelector("#InputURl"),
  submitButton: document.querySelector(".addButton"),
  cardsWrapper: document.querySelector(".Cards"),
  template: document.querySelector("#cardTemplate"),
  removeButton: document.querySelector(".remove"),
  inputForm: document.querySelector("form"),
};

export default class View {
  constructor() {
    this.refs = refs;
  }

  displayAll(items, target, template) {
    target.innerHTML = "";
    const source = template.innerHTML.trim();
    const templateFn = Handlebars.compile(source);
    const markup = items.reduce(
      (acc, element) => acc + templateFn(element),
      ``
    );
    target.innerHTML = markup;
    this.refs.input.value = "";
  }
}
