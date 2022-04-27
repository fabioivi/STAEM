import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CardList } from '../components/CardList'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>STAEM</title>
        <meta name="description" content="Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Slider />
      <CardList/>
    </>
  )
}

export default Home
