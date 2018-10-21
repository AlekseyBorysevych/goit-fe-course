const BASE_URL = "http://api.linkpreview.net";
const TOKEN = "5bb905e4709c07d0c5dcce206d1a180df48ebcbd42e33";
const localStorage = []

function Model() {
  this.create = function() {
    this.items = this.getAllBookmarks();
  }

  this.set = function (value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.push(serializedState);
    } catch (err) {
      console.error("Set state error: ", err);
    }
  };

  this.getAll = function () {
    try {
      let elements = [];
      elements = localStorage;
      // console.log(elements);
      return elements;
    } catch (err) {
      console.error("GetAll state error: ", err);
    }
  };

  this.getAllBookmarks = function() {
    return this.getAll();
  }

  this.addBookmark = function (_url) {
    if (this.items.length===0 || !this.items.find(elem=>elem.url===_url)) {
    return fetch(`${BASE_URL}/?key=${TOKEN}&q=${_url}`)
      .then(response => {if(response.ok) return response.json();
        alert("Error while fetching", response.statusText);
        throw new Error(`Error while fetching: ${response.statusText}`);})
      .then(data => {
        this.items.unshift(data);
        set(data.url, data);
        return data;
      })
      .catch(error => console.log(error));
  } else {
    alert('такая закладка уже есть');
  }}
};

module.exports = Model;
