import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the name, email, and password fields
    if (!name) {
      setNameError("Name is required");
    } else if (!email) {
      setEmailError("Email is required");
    } else if (!password) {
      setPasswordError("Password is required");
    } else {
      // Submit the signup form
      // ...
      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("password", password);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
