let APIfree = "https://rickandmortyapi.com/api/character";
let API = "http://localhost:8000/characters";

let list = document.querySelector(".list");
fetch(APIfree)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.results.forEach((elem) => {
      list.innerHTML += `<li>${elem.name} <img src="${elem.image}" > </li>`;
    });
  });

let list2 = document.querySelector(".list2");

fetch(APIfree)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.results.forEach((elem) => {
      postObjects(elem);
    });
  });

function postObjects(obj) {
  fetch(API, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=utf-8" },
    body: JSON.stringify(obj),
  });
}
fetch(API)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((elem) => {
      list2.innerHTML += `<li>${elem.name} <img src="${elem.image}" ></li>`;
    });
  });
