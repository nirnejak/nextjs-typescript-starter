import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"
import Head from "next/head"

const Home: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 10 },
  }

  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Next.js Typescript Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.15, type: "spring" }}
        className="grid h-screen place-content-center"
      >
        <h1 className="text-center text-8xl font-bold text-zinc-300">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </motion.main>
    </div>
  )
}

export default Home
