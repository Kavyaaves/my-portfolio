import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Screen1 from '../components/Screen1'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Starter - Home</title>
        <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Dancing+Script:wght@700&family=Special+Elite&display=swap" rel="stylesheet" />
      </Head>

      <main className="">
        <Screen1 />
      </main>
      {/* <Footer /> */}

      <footer className="footer">

      </footer>
    </div>
  )
}
