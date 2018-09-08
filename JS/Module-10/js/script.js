const refs = {
URL : "https://test-users-api.herokuapp.com/users/",

wrapper : document.querySelector(".wrapper"),
modal_userID : document.querySelector(".modal_userID"),
modal_userAge :document.querySelector(".modal_userAge"),
btnGetUserById : document.querySelector(".getUserById"),
btnAddUser : document.querySelector(".addUser"),
btnGetAllUser : document.querySelector(".getAllUser"),
btnRemoveUser : document.querySelector(".removeUser"),
btnUpdateUser : document.querySelector(".updateUser"),
userData : document.querySelector(".userData"),
userName: document.querySelector(".userName"),
userAge: document.querySelector(".userAge"),
userID: document.querySelector(".userID"),
output : document.querySelector(".output"),
output_box : document.querySelector(".output_box"),
}

function addUser() {
    console.clear();
    event.preventDefault();
    if (refs.userName.value==="" && refs.userAge.value==="") {
      alert("Processing unsuccess. Input corect data in user name and user age, then repeat your try.");
      return null;
    };
    const sending={
        name: refs.userName.value,
        age: refs.userAge.value,
    };
    // console.log(sending);
    fetch(refs.URL, {
    method: 'POST',
    body: JSON.stringify(sending),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      refs.output_box.innerHTML="";
      refs.output_box.insertAdjacentHTML("beforeend",`<table style="text-align: center; border-style: double;">
      <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
      </tr>
      </thead>
      <tr><td style="border-left: 1px double black">${data.data._id}</td><td style="border-left: 1px double black">${data.data.name}</td><td style="border-left: 1px double black; border-right: 1px double black">${data.data.age}</td></tr></table>`);
      inputLeerZuMachen.call(this);
    })
  .catch(error => console.log('ERROR' + error));
};

function getUser(){
    console.clear();
    // if (event.target===refs.btnGetAllUser) refs.userID.value="";
    // if (event.target===refs.btnGetUserById && refs.userID.value==="") return null;
    fetch(`${refs.URL}${refs.userID.value}`).then(response => {
        if (response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.errors[0]}`);
      }).then(data => {
        console.log(data);  
        display(data);
        inputLeerZuMachen();
    }).catch(error => console.log(`Такого пользователя в списке нет!`, error));
      
};

function removeUser(){
    console.clear();
    event.preventDefault;
    if (refs.userID.value==="") {
      alert("Processing unsuccess. Input corect data in user ID and repeat your try.");
      return null;
      };
    fetch(`${refs.URL}${refs.userID.value}`, {
  method: 'DELETE'
}).then(() => {
    console.log('success');
    inputLeerZuMachen();
    getUser.call(this);
})
.catch(error => console.log('ERROR' + error));

};

function updateUser(){
    console.clear();
    event.preventDefault;
    if (refs.userID.value==="" && refs.userName.value==="" && refs.userAge.value==="") {
    alert("Processing unsuccess. Input corect data in user ID, name and age fields.");
    return null;
    };
    fetch(`${refs.URL}${refs.userID.value}`, {
    method: 'PUT',
    body: JSON.stringify({name: refs.userName.value, age: refs.userAge.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      getUser.call(this);
      inputLeerZuMachen();
    })
  .catch(error => console.log('ERROR' + error));
};

function display(data){
    refs.output_box.innerHTML="";
    // console.log(data); 
    // console.log(data.data);
    if (Array.isArray(data.data)){
        // console.log(data.data)
        let markup = data.data.reduce(function (acc,elem) {return acc + `<tr><td style="border-left: 1px double black">${elem.id}</td><td style="border-left: 1px double black">${elem.name}</td><td style="border-left: 1px double black; border-right: 1px double black">${elem.age}</td></tr>`},``); 
        // console.log(markup);
        refs.output_box.insertAdjacentHTML("beforeend",`<table style="text-align: center; border-style: double;">
        <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
        </thead>
        ${markup}
      </table>`);
      return null;
    };
    if (typeof data.data === 'object'){
        refs.output_box.insertAdjacentHTML("beforeend",`<table style="text-align: center; border-style: double;">
        <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
        </thead>  
        <tr><td style="border-left: 1px double black">${data.data.id}</td><td style="border-left: 1px double black">${
            data.data.name
          }</td><td style="border-left: 1px double black; border-right: 1px double black">${
            data.data.age
          }</td></tr></table>`);
          return null;
    };
    document.querySelector('.output_box').textContent = data;
};

function getTableData(){
    let tmp = event.target.parentElement;
    // console.log(tmp);
    if (tmp.tagName==="TR" && tmp.childNodes[1].tagName!=="TH"){
        // console.log(tmp.childNodes);
        refs.userID.value=tmp.childNodes[0].innerText;
        refs.userName.value=tmp.childNodes[1].innerText;
        refs.userAge.value=tmp.childNodes[2].innerText;
    };
};

function inputLeerZuMachen(){
    refs.userID.value="";
    refs.userName.value="";
    refs.userAge.value="";
}

refs.wrapper.addEventListener("click",()=>{
event.preventDefault;
});
refs.btnGetUserById.addEventListener('click', ()=>{
  if (refs.userID.value!==""){
    getUser.call(this);
  } else {
    alert("Processing unsuccess. Input corect data in user ID field.");
  };
});
refs.btnGetAllUser.addEventListener('click', ()=>{
  inputLeerZuMachen();
  getUser.call(this);
});
refs.btnAddUser.addEventListener('click',addUser);
refs.btnRemoveUser.addEventListener('click',removeUser);
refs.btnUpdateUser.addEventListener('click',updateUser);
refs.output_box.addEventListener("click",getTableData);