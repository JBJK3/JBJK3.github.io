const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "JBJK" && password === "3993") {
        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password.");
    }
});
