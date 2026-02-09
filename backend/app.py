from flask import Flask, request, redirect, url_for, render_template_string

app = Flask(__name__)

# Temporary users (for testing)
USERS = {
    "admin": "admin123",
    "user": "password123"
}

@app.route("/", methods=["GET"])
def home():
    # just redirect to frontend
    return redirect("http://127.0.0.1:5500/login.html")


@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    # basic validation
    if not username or not password:
        return render_template_string("<h2>Missing fields</h2>")

    # check credentials
    if username in USERS and USERS[username] == password:
        return render_template_string(f"""
            <h2>Login Successful</h2>
            <p>Welcome, {username}</p>
        """)
    else:
        return render_template_string("<h2>Invalid username or password</h2>")


if __name__ == "__main__":
    app.run(debug=True)
