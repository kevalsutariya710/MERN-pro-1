import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const history = useNavigate()
    const [data, setData] = useState({
        email: '',
        pass: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const LoginUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/login', data)

            .then(res => {
                alert('Login successful')
                history('/')
            })
            .catch(err => { console.log(err) })


    }

    return (
        <>
            <div className="main">
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign in</h2>
                                <form method="POST" className="register-form" id="register-form" onSubmit={LoginUser}
                                >
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email"
                                            value={data.email}
                                            onChange={handleInputChange}
                                            placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass"
                                            value={data.pass}
                                            onChange={handleInputChange}
                                            placeholder="Password" />
                                    </div>
                                    <div className="form-group form-button">
                                        <button type="submit" className="form-submit">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src="./extra/images/signup-image.jpg" alt="sing up image" /></figure>
                                <Link to="/reg">
                                    <a className="signup-image-link">Click the Reg</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login