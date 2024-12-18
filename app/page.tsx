import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "@/utils/animation"
import { generateMetadata } from "@/utils/metadata"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Next.js App",
  description: "Next.js Typescript Starter",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <motion.h1
        initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
        animate={{ translateY: 0, opacity: 1, filter: "none" }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="text-5xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-300"
      >
        Welcome to the Next.js starter!
      </motion.h1>
    </main>
  )
}

export default Home
