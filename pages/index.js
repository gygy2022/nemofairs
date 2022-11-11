import Head from 'next/head'
import Image from 'next/image'
import Application from '../components/application-form'
import Ask from '../components/ask'
import Booth from '../components/booth-guide'
import Brands from '../components/brands'
import Exhibitors from '../components/exhibitors-list'
import Gallery from '../components/gallery'
import Intro from '../components/intro'
import MainImage from '../components/main-image'
import Participation from '../components/participation-info'
import VisitInfo from '../components/visit-info'
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
