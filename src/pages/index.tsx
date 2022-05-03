import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { CardList } from '../components/CardList'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

interface TFilter {
  search: string,
  sort: "title" | "price",
  count: number,
}

const Home: NextPage = () => {
  const [filter, setFilter] = useState<TFilter>({
    search: "",
    sort: "price",
    count: 5
  })

  return (
    <>
      <Head>
        <title>STAEM</title>
        <meta name="description" content="Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Slider />
      <Filter filter={filter} setFilter={setFilter}/>
      <CardList filter={filter} setFilter={setFilter}/>
    </>
  )
}

export default Home
