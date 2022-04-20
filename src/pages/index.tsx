import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CardList } from '../components/CardList'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>STAEM</title>
        <meta name="description" content="Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <CardList/>
    </div>
  )
}

export default Home
