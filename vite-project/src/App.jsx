import { useState } from "react";

import Authenticate from "./components/Authentication";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="app">
      <SignUpForm onSetToken={setToken} className="sign-up-form" />
      <Authenticate token={token} />
    </div>
  );
}


