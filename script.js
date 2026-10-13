const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  // Validate inputs
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Create Promise
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle Promise
  votePromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});