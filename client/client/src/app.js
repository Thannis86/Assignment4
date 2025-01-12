const mainForm = document.querySelector("#mainForm");
const testBtn = document.querySelector("#test");
// function App() {
//   const [backendData, setBackendData] = useState([{}]);
//   useEffect(() => {
//     fetch("/api")
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   });
// }
const url = "http://localhost:8080/";

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Default Prevented");
}

mainForm.addEventListener("submit", handleSubmitMessageForm);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/guestbook");

    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

fetchData();

mainForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Gather form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    words: document.getElementById("words").value,
  };

  try {
    // Send data to the server
    const response = await fetch("http://localhost:8080/submit-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Handle the server response
    const result = await response.json();
    console.log("Server response:", result);
  } catch (error) {
    console.error("Error sending data:", error);
  }
});

const test = document.querySelector("#test");
