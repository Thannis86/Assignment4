const mainForm = document.querySelector("#mainForm");
const testBtn = document.querySelector("#test");
const mainDiv = document.getElementById("mainDiv");

const url = "https://assignment4-z1bi.onrender.com:/";

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Default Prevented");
}

mainForm.addEventListener("submit", handleSubmitMessageForm);

mainForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Gather form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    words: document.getElementById("words").value,
  };

  // Send data to the server
  const response = await fetch(
    "https://assignment4-z1bi.onrender.com:/submit-data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  // Handle the server response
  const result = await response.json();
  console.log("Server response:", result);
});

const viewPosts = document.querySelector("#viewPosts");
const viewForm = document.querySelector("#viewForm");

viewPosts.addEventListener("click", function () {
  viewPosts.style.display = "none";
  viewForm.style.display = "flex";
  mainForm.style.display = "none";
  mainDiv.style.display = "flex";
});

viewForm.addEventListener("click", function () {
  viewPosts.style.display = "flex";
  viewForm.style.display = "none";
  mainForm.style.display = "flex";
  mainDiv.style.display = "none";
});

console.log("hello");

// Getting data from DB

const text = document.getElementById("test");
const aTest = document.querySelector("#aTest");

fetchData();

async function fetchData() {
  const response = await fetch(
    "https://assignment4-z1bi.onrender.com/guestbook"
  );
  const data = await response.json();
  console.log(data);
  data.forEach((entry) => {
    const listBox = document.createElement("div");
    listBox.setAttribute("id", "box");
    mainDiv.appendChild(listBox);
    const listName = document.createElement("h1");
    listName.textContent = `Name: ${entry.name}`;
    const listEmail = document.createElement("p1");
    listEmail.textContent = `Email: ${entry.email}`;
    const listPhone = document.createElement("p2");
    listPhone.textContent = `Phone Number: ${entry.phone}`;
    const extraWords = document.createElement("h3");
    extraWords.textContent = `Words For the Bride and Groom:`;
    const listWords = document.createElement("h2");
    listWords.textContent = entry.words;
    listBox.appendChild(listName);
    listBox.appendChild(listEmail);
    listBox.appendChild(listPhone);
    listBox.appendChild(extraWords);
    listBox.appendChild(listWords);
  });
}

// , Email: ${entry.email}, Phone: ${entry.phone}, Words: ${entry.words}

const myFunction = document.querySelector("#myFunction");

// myFunction.addEventListener("click", function () {
//   const node = document.createElement("li");
//   const textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// });
