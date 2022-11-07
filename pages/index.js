import Head from 'next/head'
import Image from 'next/image'
import Ask from '../components/ask'
import Brands from '../components/brands'
import MainImage from '../components/main-image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <MainImage />
        <Brands />
        <Ask />
    </>
  )
}
