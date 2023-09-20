import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from './login'
import classes from './index.module.css'
import Logout from './logout'
import ImageList from '../../components/images-list'
import { getAllImages } from '../../dummy_data'


export default function Home() {
  const allImages = getAllImages();
  return (
    <main className={classes.main}>
      <Login />
      <Logout/>
      <ImageList image={allImages}/>
    </main>
  )
}