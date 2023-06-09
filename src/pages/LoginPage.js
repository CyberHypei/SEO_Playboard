import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/LoginPage.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto" align= "center">
            <h2>Sign in to us</h2>
            <form action="/" >
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <br/>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <br/>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}