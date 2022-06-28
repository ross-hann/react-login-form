import React, { useState} from "react"
import Nav from "./components/Nav"
import Form from "./components/Form"


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({
    name: "",
    email:""
  })

  const [error, setError] = useState ("")

  const Login = details => {
    if (details.email == adminUser.email && details.password == adminUser.password) {
      setUser({
        name:details.name,
        email:details.email
      })
    } else {
      setError("Details do not match")
    }
  }

  const Logout = () => {
    setUser({name:"", email:""})
  }

  return (
    <>
      <div className="App">
        <Nav />

        {(user.email != "") ? (
          <div className="Welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout} className="form--submit">Logout</button>
          </div>
        ) : (
          <Form Login = {Login} error = {error}/>
        )
        }
      </div>
       
    </>
  );
}

export default App;