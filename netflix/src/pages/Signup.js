import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseContext } from "../context/firebase";
import {Link as ReachRouterLink } from 'react-router-dom';
import * as ROUTES from './../constants/Routes';
import Logo from "../components/Header/Logo";
import Input from "../components/Input";
import styles from "./pages.module.css";

function Signup() {

    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { firebase } = useContext(FirebaseContext);

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.preventDefault();

        //do firebase stuff
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((result) => {
                // console.log('result' ,result);
                updateProfile(auth.currentUser, {
                        displayName: firstName,

                    })

            })


            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setFirstName('');
                setPassword('');
                setEmailAddress('');
                setError(error.message);
            })
    }

    return (
        <div className={styles.page}>
            <Logo />
            <form onSubmit={handleSignUp} method="POST" className={styles.form}>
                <h3 className={styles.signTitle}>Sign Up</h3>
                <Input
                    type="text"
                    placeholder="name"
                    value={firstName}
                    onChange={({target}) => setFirstName(target.value)}
                />
                <Input
                    type="text"
                    placeholder="email"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Input
                    type="text"
                    placeholder="password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button disabled={isInvalid} type="submit" className={styles.btn}>sign up</button>
                <p className={styles.text}>Already a user? <ReachRouterLink to='/signin' className={styles.signLink}>Sign in</ReachRouterLink></p>

            </form>
        </div>
    )
}

export default Signup;