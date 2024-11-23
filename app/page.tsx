import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import { generateMetadata } from "@/utils/metadata"
import { BASE_TRANSITION } from "utils/animation"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Next.js App",
  description: "Next.js Typescript Starter",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <motion.h1
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="text-5xl font-semibold tracking-tighter text-zinc-800 dark:text-zinc-300"
      >
        Welcome to the Next.js starter!
      </motion.h1>
    </main>
  )
}

export default Home
