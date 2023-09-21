import classes from './item.module.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function ImageItem() {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <div className={classes.container}>
      <h1>WELCOME TO MY GALLERY OF SHOE COLLECTIONS</h1>
      <p>Have a nice tour in my world of footwears</p>
    </div>
  ));
}