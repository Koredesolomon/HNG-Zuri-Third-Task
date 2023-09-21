import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from './login'
import classes from './index.module.css'
import Logout from './logout'
import ImageList from '../components/images-list'
import ImageItem from '../components/images-item'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'



export default function Home() {
  return (
    <main className={classes.main}>
      <Nav/>
      <Login />
      <ImageItem/>
      <Logout/>
      <ImageList/>
      <Footer/>
    </main>
  )
}