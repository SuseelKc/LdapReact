// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './login.css'

export default function Login(){
    return(
        <div className="login-container">
                <h1>Login</h1>

                <form>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Login</button>
                </form>
                
        </div>
    )
}
