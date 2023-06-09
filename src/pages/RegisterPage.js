import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/LoginPage.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto" align= "center">
            <h2>Join us</h2>
            <h5>Create your personal account NOW</h5>
            <form action="/">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <br></br>
                <p>
                    <label> Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <br></br>
                <p>
                    <label> Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <br></br>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}