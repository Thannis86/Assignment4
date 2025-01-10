const mainForm = document.querySelector("#mainForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Default Prevented");
}

mainForm.addEventListener("submit", handleSubmitMessageForm);

console.log("Connected");
