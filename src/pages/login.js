import { useAuth0 } from "@auth0/auth0-react";
import classes from './login.module.css'

export default function Login(){
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button className={classes.button} onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}