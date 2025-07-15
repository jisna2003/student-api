import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import axios from 'axios'

const ViewStudent = () => {
    const [students, changeStudents] = useState(
        { "status": "success", "data": [] }

    )
    const fetchData = () => {
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response) => {
                changeStudents(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <StudentNavbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <table className="table table-bordered table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Roll Number</th>
                                        <th>Admission Number</th>
                                        <th>College</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.data.map((student, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{student.name}</td>
                                            <td>{student.roll_number}</td>
                                            <td>{student.admission_number}</td>
                                            <td>{student.college}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStudent