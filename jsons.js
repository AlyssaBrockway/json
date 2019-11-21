window.addEventListener("load", function () {
    getdata();
    displaydata()
      ;
  });
  
  async function getdata() {
    const response = await fetch("json.json");
    const json = await response.json();
    console.log(json)
  
  }
  var stuff = [
    {
      "firstName": "Alyssa",
      "surName": "Brockway",
      "age": "17"
    },
    {
      "firstName": "Tony",
      "surName": "Stark",
      "age": "43"
    },
    {
      "firstName": "Bob",
      "surName": "Samson",
      "age": "60"
    }
  ]
  
  
  
  function displaydata() {
    var div = document.createElement("div");
    div.classList.add("card");
  
  
    var firstname = document.createElement("h1");
    var surname = document.createElement("h1");
    var age = document.createElement("h1");
    firstname.innerHTML = `${stuff[0].firstName}`;
    surname.innerHTML = `${stuff[0].surName} `;
    age.innerHTML = `${stuff[0].age} `;
  
    div.appendChild(firstname);
    div.appendChild(surname);
    div.appendChild(age);
    document.querySelector(".content").appendChild(div);
  
    var div = document.createElement("div");
    div.classList.add("card");
    firstname.classList.add("firstname");
    surname.classList.add("surname");
    age.classList.add("age")
  
  
    var firstname = document.createElement("h1");
    var surname = document.createElement("h1");
    var age = document.createElement("h1");
    firstname.innerHTML = `${stuff[1].firstName}`;
    surname.innerHTML = `${stuff[1].surName} `;
    age.innerHTML = `${stuff[1].age} `;
  
    div.appendChild(firstname);
    div.appendChild(surname);
    div.appendChild(age);
    document.querySelector(".content").appendChild(div);
  
    firstname.classList.add("firstname");
    surname.classList.add("surname");
    age.classList.add("age")
  }
  ;
  