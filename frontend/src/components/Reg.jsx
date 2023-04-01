import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Reg = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const sendData = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/reges', user)

            .then(res => {
                alert('success');
                history("/login")
            })
            .catch(err => console.log(err))


    }
    return (
        <>
            <div className="main">
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" className="register-form" id="register-form">
                                    <div className="form-group">
                                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Name"
                                            value={user.name}
                                            onChange={handleInput}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Email"
                                            value={user.email}
                                            onChange={handleInput}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-phone"></i></label>
                                        <input type="number" name="number" id="number" placeholder="phone number"
                                            value={user.number}
                                            onChange={handleInput}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="password" id="pass" placeholder="Password"
                                            value={user.password}
                                            onChange={handleInput}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="cpassword" id="cpassword"
                                            value={user.cpassword}
                                            onChange={handleInput}
                                            placeholder="Repeat your password" required />
                                    </div>

                                    <div className="form-group form-button">
                                        <button type="submit" className="form-submit" onClick={sendData}>
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src="./extra/images/signup-image.jpg" alt="sing up image" /></figure>
                                <Link to="/login" >
                                    <a className="signup-image-link">I am already member</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Reg
