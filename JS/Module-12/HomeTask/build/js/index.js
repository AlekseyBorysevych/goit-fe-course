"use strict";

// import {displayCards} from './partial/cards';
var refs = {
  removeButton: document.querySelector(".remove"),
  cardTemplate: document.querySelector(".cardTemplate"),
  cardsHolder: document.querySelector(".Cards"),
  inputurl: document.querySelector("#InputURl"),
  addButton: document.querySelector(".addButton")
};

var LOCALSTORAGE = function (w) {
  if (!w) return;
  var isActive = "localStorage" in w;
  var get = function get(key) {
    try {
      var serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (err) {
      console.error("Get state error: ", err);
    }
  };

  var set = function set(key, value) {
    try {
      var serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error("Set state error: ", err);
    }
  };

  var publicAPI = {
    isActive: isActive,
    get: get,
    set: set
  };

  return publicAPI;
}(window);
console.log(LOCALSTORAGE); // {isActive: true, get: ƒ, set: ƒ}

var displayCards = function displayCards(cardsArray, template, target) {
  console.log(template, target);
  target.innerHTML = "";
  var source = template.innerHTML.trim();
  var templateFn = Handlebars.compile(source);
  var markup = cardsArray.reduce(function (acc, element) {
    return acc + templateFn(element);
  }, "");
  target.innerHTML = markup;
};

var arrCards = [
  //   {
  //     title: "LinkPreview | Admin Panel",
  //     image: "https://my.linkpreview.net/logo.png",
  //     description:
  //       "LinkPreview is one online REST-API service to handle with sites and web-pages.",
  //     url: "https://my.linkpreview.net/documentation"
  //   },
  //   {
  //     title: "module-12-task-02",
  //     image:
  //       "https://gravatar.com/avatar/885d9260740ee8585db7e444548f69a5?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png",
  //     description:
  //       "CodePen is a social development environment. At its heart, it allows you to write code in the browser, and see the results of it as you build. A useful and liberating tool for developers of any skill, and particularly empowering for people learning to code. We focus primarily on front-end languages like HTML, CSS, JavaScript, and preprocessing syntaxes that turn into those things",
  //     url: "https://codepen.io/Flemmard/pen/aaYErq?editors=1111"
  //   },
  //   {
  //     title: "Модуль 12",
  //     image: "",
  //     description: "Модуль 12 - Домашнее задание",
  //     url: "http://fecore.net.ua/javascript/pages/homework/module-12.html"
  //   },
  //   {
  //     title: "Модуль 12",
  //     image: "",
  //     description: "Модуль 12 - Домашнее задание",
  //     url: "http://fecore.net.ua/javascript/pages/homework/module-12.html"
  //   }
];
// title,image,description,url

var linkPreview = function linkPreview(url) {
  fetch("http://api.linkpreview.net/?key=5bb905e4709c07d0c5dcce206d1a180df48ebcbd42e33&q=" + url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.url);
    //   console.log(arrCards.find(elem=>console.log(elem.url)));
    if (arrCards.length === 0 || !arrCards.find(function (elem) {
      return elem.url === data.url;
    })) {
      arrCards.unshift(data);
      LOCALSTORAGE.set('fecaon06|' + data.url, data);
      displayCards.call(document, arrCards, refs.cardTemplate, refs.cardsHolder);
    } else {
      alert('такая закладка уже есть');
    };
  }).catch(function (error) {
    return console.log(error);
  });
};

var removeCard = function removeCard(_ref) {
  var target = _ref.target;

  var nodeName = target.nodeName;
  var elemClass = target.classList.contains("remove");

  if (nodeName !== 'BUTTON' && !elemClass) return;
  var url = target.parentNode.querySelector("span").textContent.replace("URL: ", "");
  var index = arrCards.findIndex(function (elem) {
    if (url === elem.url) return true;
  });
  arrCards.splice(index, 1);
  localStorage.removeItem("fecaon06|" + url);
  displayCards(arrCards, refs.cardTemplate, refs.cardsHolder);
};

for (var key in localStorage) {
  if (key.includes('fecaon06|')) {
    arrCards.push(JSON.parse(localStorage.getItem(key)));
  }
};

displayCards(arrCards, refs.cardTemplate, refs.cardsHolder);

refs.addButton.addEventListener("click", function () {
  linkPreview(refs.inputurl.value);
  refs.inputurl.value = "";
});

refs.cardsHolder.addEventListener("click", removeCard.bind(undefined));

// refs.removeButton.addEventListener("click",(e)=>{
//     console.log(e.parrentNode());
// })