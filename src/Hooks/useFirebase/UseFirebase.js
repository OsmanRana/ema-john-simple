
import initializeAuthentication from '../../firebase/Firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider) 
    }

    const registerWithEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then (result => {
            const registerdUser = result.user;
            setEmail(registerdUser.email)
            setPassword(registerdUser.password)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            });
    }


    return {
        user,
        signInWithGoogle,
        registerWithEmailAndPassword,
        logOut
    }

}

export default useFirebase;