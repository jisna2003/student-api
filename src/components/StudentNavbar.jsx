import React from 'react'
import { Link } from 'react-router-dom'

const StudentNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Student</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link" to="/LoginStudent">StudentLogin</Link>
                            <Link class="nav-link active" aria-current="page" to="/AddStudent">Add Student</Link>
                            <Link class="nav-link" to="/SearchStudent">Search Student</Link>
                            <Link class="nav-link" to="/DeleteStudent">Delete Student</Link>
                            <Link class="nav-link" to="/ViewStudent">View Student</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default StudentNavbar