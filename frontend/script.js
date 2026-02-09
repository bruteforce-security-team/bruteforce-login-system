// get form and inputs
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

// form submit event
form.addEventListener("submit", function (e) {

    // basic validation
    if (username.value.trim() === "" || password.value.trim() === "") {
        e.preventDefault(); // stop form submit
        alert("Please fill all fields");
        shakeInputs();
        return;
    }

    if (password.value.length < 6) {
        e.preventDefault();
        alert("Password must be at least 6 characters");
        shakeInputs();
        return;
    }

    // loading micro-interaction
    const loginBtn = form.querySelector('button[type="submit"]');
    loginBtn.innerText = "Logging in...";
    loginBtn.disabled = true;

    // form will submit normally to /login
});

// small error animation helper
function shakeInputs() {
    username.classList.add("error");
    password.classList.add("error");

    setTimeout(() => {
        username.classList.remove("error");
        password.classList.remove("error");
    }, 300);
}

