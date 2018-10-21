const expect    = require('chai').expect;
var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);
var assert = require('assert');

const BASE_URL = "http://api.linkpreview.net";
const TOKEN = "5bb905e4709c07d0c5dcce206d1a180df48ebcbd42e33";
const testBookmarks = [
    {
      title: "LinkPreview | Admin Panel",
      image: "https://my.linkpreview.net/logo.png",
      description:
        "LinkPreview is one online REST-API service to handle with sites and web-pages.",
      url: "https://my.linkpreview.net/documentation"
    },
    {
      title: "module-12-task-02",
      image: "https://gravatar.com/avatar/885d9260740ee8585db7e444548f69a5?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png",
      description:
        "CodePen is a social development environment. At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating tool for developers of any skill, and particularly empowering for people learning to code. We focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things",
      url: "https://codepen.io/Flemmard/"
    },
    {
      title: "Модуль 12",
      image: "",
      description: "Модуль 12 - Домашнее задание",
      url: "http://fecore.net.ua/javascript/pages/homework/module-12.html"
    },
    {
      title: "Модуль 13",
      image: "",
      description: "Модуль 13 - Домашнее задание",
      url: "http://fecore.net.ua/javascript/pages/homework/module-13.html"
    }
  ];

global.window = {}
const window = global.window;
import 'mock-local-storage'
import "isomorphic-fetch"
window.localStorage = global.localStorage

testBookmarks.forEach(elem=>{
  window.localStorage.setItem(elem.url, JSON.stringify(elem));
})

const getAllBookmarks = function() {
  try {
    let elements = [];
    let element = {};
    for (const key in window.localStorage) {
      element = JSON.parse(window.localStorage.getItem(key));
      elements.push(element);
    }
    // console.log(elements);
    return elements;
  } catch (err) {
    console.error("GetAll state error: ", err);
  }
};

const sampleFetchedObject = {
  description: "Chai is a BDD / TDD assertion library for [node](http://nodejs.org) and the browser that can be delightfully paired with any javascript testing framework.",
  image: "",
  title: "Assert - Chai",
  url: "https://www.chaijs.com/api/assert/"
};

const addBookmark = function(_url) {
  return fetch(`${BASE_URL}/?key=${TOKEN}&q=${_url}`)
    .then(response => {if(response.ok) return response.json();
      alert("Error while fetching", response.statusText);
      throw new Error(`Error while fetching: ${response.statusText}`);})
    .then(data => {
      return data;
    })
    .catch(error => console.log(error));
};


describe('some tests', () => {

it("TestArr similar to return value from localStorage.Like in Model.getAllBookmarks", () => {
  const AllBookmarks = getAllBookmarks();
  // console.log(AllBookmarks);
  // console.log(testBookmarks);
  assert.notStrictEqual(AllBookmarks, testBookmarks);
});

it("Fetching sample url = define obj.Like in Model.addBookmark", () => {
  addBookmark('https://www.chaijs.com/api/assert/').then(data=>{
    const respond = (data==sampleFetchedObject);
    assert.isTrue(respond);
  });
});

it("blank test - just for test",test(function(){
}));


});