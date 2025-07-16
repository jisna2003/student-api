import React, { useState } from 'react'
import StudentNavbar from './StudentNavbar'

const LoginStudent = () => {
    const [input, changeinput] = useState(
        { username: "", password: "" }
    )
    const inputHandler = (event) => { changeinput({ ...input, [event.target.name]: event.target.value }) }
    const readvalues = () => {
        console.log(input)
    }
    return (
        <div>
            <StudentNavbar/>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="d-flex justify-content-center align-items-center vh-100">

                            <div className="w-100" style={{ maxWidth: '400px' }}>

                                <div className="row g-3">
                                    <h2 style={{

                                        color: '#17a2b8',
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '40px',
                                        textAlign: 'center'


                                    }}>LOGIN</h2><br></br>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='username' value={input.username} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center" >
                                        <button className="btn btn-info" onClick={readvalues}>LOGIN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginStudent