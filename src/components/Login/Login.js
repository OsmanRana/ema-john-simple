import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';



const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/shop'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email Please" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>--------------- Or -----------------</div>
                <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;