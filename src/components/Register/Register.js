import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Register = () => {
    const { signInWithGoogle, registerWithEmailAndPassword} = useAuth();
    return (
        <div>
            <div>
                <h2>Rgister</h2>
                <form onSubmit = {registerWithEmailAndPassword}>
                    <input type ="email" name ="" id = "" placeholder ="Your Email Please"/>
                    <br/>
                    <input type ="password" name = "" id = ""/>
                    <br/>
                    <input type ="submit" value = "submit"/>
                </form>
                <p>Already have an account? <Link to = "/login">Sign In</Link></p>
                <div>--------------- Or -----------------</div>
                <button onClick = {signInWithGoogle} className = "btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;