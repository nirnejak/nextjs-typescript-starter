import * as React from "react"

import { type Metadata } from "next"
import { Link } from "next-view-transitions"

import { generateMetadata } from "utils/metadata"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Not Found | Jitendra Nirnejak",
  description: "Portfolio Website of Jitendra Nirnejak, Developer and Designer",
})

const NotFound: React.FC = () => {
  return (
    <main className="container">
      <section className="grid min-h-screen place-content-center">
        <div>
          <h1 className="mb-3 mt-10 text-center text-3xl font-bold tracking-tight text-zinc-300 md:text-4xl">
            404
          </h1>
          <p className="text-center text-zinc-400">
            The page you&apos;re looking for cannot be found. Go{" "}
            <Link
              href="/"
              className="font-semibold transition-colors hover:text-zinc-200 focus:text-zinc-200"
            >
              Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound
