import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {Link as ReachRouterLink } from 'react-router-dom';
import * as ROUTES from './../constants/Routes';
import Logo from './../components/Header/Logo';
import Input from "../components/Input";
import styles from './pages.module.css';

function Signin() {
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
                })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
                console.log(error);
                alert('No user with such email and password, please try again or sign up');
            })
    }


    return (
        <div className={styles.page}>
            <Logo />
            <form onSubmit={handleSignIn} method="POST" className={styles.form}>
                <h3 className={styles.signTitle}>Sign In</h3>
                <Input
                    type="email"
                    placeholder="Email"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                    styles={styles}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button disabled={isInvalid} type="submit" className={styles.btn}>sign in</button>
                <p className={styles.text}>New to netflix? <ReachRouterLink to='/signup' className={styles.signLink}>Sign up now</ReachRouterLink></p>

            </form>
        </div>
    )
}

export default Signin;