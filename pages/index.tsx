import * as React from "react"

import Head from "next/head"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next.js Typescript Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen grid place-content-center">
        <h1 className="text-8xl font-bold text-center text-slate-800">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
