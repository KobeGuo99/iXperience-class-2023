import { React, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = new useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container m-5">
      <div className="card card-body">
        <h1>Register</h1>
        <p>Please enter your email and password to login</p>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
