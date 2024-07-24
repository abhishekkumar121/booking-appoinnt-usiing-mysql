document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    // const time = document.getElementById("time").value;

    fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, date }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").textContent = data.message;
      })
      .catch((error) => {
        document.getElementById("message").textContent =
          "Error: " + error.message;
      });
  });
