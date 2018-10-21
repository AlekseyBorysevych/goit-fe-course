import { LOCALSTORAGE } from "./services/localStorage";
import Model from "./model";
import View from "./view";
import Controller from "./controller";
import "../css/style.css"

const model = new Model(LOCALSTORAGE.getAll());
const view = new View();

const contrl = new Controller(model, view);
// console.log(contrl);
