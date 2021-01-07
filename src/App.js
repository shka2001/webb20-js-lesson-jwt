import React, { useState } from "react";

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // function handleEmailInput(e) {
  //   console.log(e.target.value);
  // }
  // function handlePasswordInput(e) {
  //   console.log(e.target.value);
  // }
  //一つにまとめると以下のようになる。

  function handleOnChange(e) {
    // console.log(e.target.value);
    //nameとpasswordを区別できるように変える。
    console.log(e.target.name, e.target.value);
    if (e.target.name === "email") {
      setEmailInput(e.target.value);
    }
    if (e.target.name === "password") {
      setPasswordInput(e.target.value);
    }
  }

  return (
    <div>
      <form>
        <label>Email</label>
        {/* <input onChange={handleEmailInput} /> */}
        <input name="email" onChange={handleOnChange} />
        <label>Password</label>
        {/* <input onChange={handlePasswordInput} /> */}
        <input name="password" onChange={handleOnChange} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
