import { LOCALSTORAGE } from "./services/localStorage";
import { encodeRFC5987ValueChars } from "./services/EncoderURl";

const BASE_URL = "http://api.linkpreview.net";
const TOKEN = "5bb905e4709c07d0c5dcce206d1a180df48ebcbd42e33";


export default class Model {
  constructor() {
    this.items = this.getAllBookmarks();
  }

  getAllBookmarks() {
    return LOCALSTORAGE.getAll();
  }

  addBookmark(_url) {
    if (this.items.length===0 || !this.items.find(elem=>elem.url===_url)) {
    return fetch(`${BASE_URL}/?key=${TOKEN}&q=${encodeRFC5987ValueChars(_url)}`)
      .then(response => {if(response.ok) return response.json();
        alert("Error while fetching", response.statusText);
        throw new Error(`Error while fetching: ${response.statusText}`);})
      .then(data => {
        this.items.unshift(data);
        LOCALSTORAGE.set(data.url, data);
        return data;
      })
      .catch(error => console.log(error));
  } else {
    alert('такая закладка уже есть');
  }}
}

