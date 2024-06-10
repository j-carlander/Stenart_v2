import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import fetchService from "../../services/fetchService";
import "./Login.css";

export function Login() {
  const setToken = useOutletContext()[1];

  const [credentials, setCredetials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const result = await fetchService.login(credentials);
    console.log("login: ", result);
    setMessage(result.message);
    if (result.token) {
      setTimeout(() => {
        sessionStorage.setItem("TOKEN", result.token);
        setToken(result.token);
        navigate("/admin");
      }, 2000);
    }
  }

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Logga in</h2>
      <label htmlFor="email">
        E-post:{" "}
        <input
          type="email"
          id="email"
          value={credentials.email}
          onChange={(e) =>
            setCredetials((cred) => ({ ...cred, email: e.target.value }))
          }
        />
      </label>
      <label htmlFor="password">
        Lösenord:{" "}
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={(e) =>
            setCredetials((cred) => ({ ...cred, password: e.target.value }))
          }
        />
      </label>
      <button>Logga in</button>
      {message ? <p>{message}</p> : null}
    </form>
  );
}
