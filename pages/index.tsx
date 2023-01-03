import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Model3 from '../components/Model3'
import ModelY from '../components/ModelY'
import ModelX from '../components/ModelX'
import Model5 from '../components/Model5'
import Solarpanel from '../components/Solarpanel'
import Solarroof from '../components/Solarroof'

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>E-Vehicle Website</title>
        <meta
          name="description"
          content="Building a E-Vehicle website with Next.js"
        />
      </Head>
      <main id="mainDiv" className="snap-feature">
      <Header />
      <Model3 />
      <ModelY />
      <ModelX />
      <Model5 />
      <Solarpanel />
      <Solarroof />
      </main>
    </>
  )
}

export default Home
