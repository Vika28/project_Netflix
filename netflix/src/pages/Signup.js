import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {Link as ReachRouterLink } from 'react-router-dom';
import * as ROUTES from './../constants/Routes';
import Logo from "../components/Header/Logo";
import Input from "../components/Input";
import styles from "./pages.module.css";
import { collection, doc, setDoc } from "firebase/firestore";
import {db} from "../lib/firebase.prod";

function Signup() {

    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    const handleSignUp = (event) => {
        event.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((result) => {
                console.log('currentUser', result);
                updateProfile(auth.currentUser, {
                        displayName: firstName,
                    })

                const citiesRef = collection(db, "users");

                setDoc(doc(citiesRef, result.user.uid), {
                    favouriteMovies: [],
                    likedMovies: [],
                }, {merge: true})
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
                    placeholder="Name"
                    value={firstName}
                    onChange={({target}) => setFirstName(target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                    className={styles.inputEmail}
                    hint="Enter email in format xxxx@ccc.ddd"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    className={styles.inputPassword}
                    hint="Password must be at least 9 symbols"
                />
                <button disabled={isInvalid} type="submit" className={styles.btn}>sign up</button>
                <p className={styles.text}>Already a user? <ReachRouterLink to='/signin' className={styles.signLink}>Sign in</ReachRouterLink></p>

            </form>
        </div>
    )
}

export default Signup;