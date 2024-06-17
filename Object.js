function Person(fristName, lastName, age, eye) {
  this.fristName = fristName;
  this.lastName = lastName;
  this.age = age;
  this.eye = eye;
}

const hossein = new Person("hossein", "jami", 26, "brown");

console.log(hossein);

document.getElementById(
  "demo"
).innerHTML = `${hossein.fristName} is ${hossein.age} years old `;

const inputname = document.querySelector("#input");
const form = document.querySelector("form");

form.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  console.log(inputname.value);
}

function fetch1() {
  fetch("http://localhost:8000/articles")
    .then((res) => res.json())
    .then((data) => {

    });
}


async function getid() {

let x = await fetch("http://localhost:8000/articles/")
let y = await x.text()
document.getElementById("demo1").innerHTML=y
}

getid()

