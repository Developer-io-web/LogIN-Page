import React from 'react'
import "./Navbar.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default function Navbar
() {
  return (
    <div>
      <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><strong>ATools</strong></a>
    <div className="d-flex">

      <button class="btn darkblue" type="submit">Start Free Trial</button>
      <button class="btn orange" type="submit">LogIn</button>
    </div>
  </div>
</nav>
    </div>
  )
}
