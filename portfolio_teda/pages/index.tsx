import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen sticky z-0 overflow-scroll snap-y snap-mandatory '>
      <Head>
        <title>Teda Portfolio</title>
      </Head>

      <Header/>

      {/* Hero */}
      <section id='Hero' className='snap-center'>
        <Hero/>
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home
