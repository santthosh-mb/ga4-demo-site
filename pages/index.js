import Head from 'next/head'
import Header from '@components/Header'
import Links from '@components/Links'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to The Corporate Coach [DEV][DEMO]!" />
        <p className="description">
            <Links section={"Development"} domain={"dev.mbodev.me"} />
            <br/><br/>
            <Links section={"Local"} domain={"clients-local.mbodev.me"} />
        </p>
      </main>

      <Footer />
    </div>
  )
}
