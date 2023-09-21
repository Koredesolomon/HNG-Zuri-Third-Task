import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from './login'
import classes from './index.module.css'
import Logout from './logout'
import ImageList from '../components/images-list'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'



export default function Home() {
  return (
    <main className={classes.main}>
      <Nav/>
      <Login />
      <Logout/>
      <ImageList/>
      <Footer/>
    </main>
  )
}