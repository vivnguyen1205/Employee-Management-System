import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employeelist from './EmployeeList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
const App = () => {
  return (
   <Router>
    <div>
      <nav>
        <ul className = 'nav'>
          <li className = 'nav-item'>
            <Link className= 'nav-link' to={"/get"}>EmployeeList</Link>
          </li>
          <li className = 'nav-item'>
            <Link className= 'nav-link' to={"/create"}>CreateEmployee</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/get" element={<Employeelist />} />
        <Route path="/create" element={<CreateEmployee />} />
      </Routes>
    </div>
   </Router>
  )
}

export default App