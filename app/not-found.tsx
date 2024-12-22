import * as React from "react"

import type { Metadata } from "next"
import { Link } from "next-view-transitions"

import { generateMetadata } from "@/utils/metadata"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Not Found | Next.js App",
  description: "Page not found on Next.js Typescript Starter",
})

const NotFound: React.FC = () => {
  return (
    <main className="container">
      <section className="grid min-h-screen place-content-center">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-300">
            404
          </h1>
          <p className="text-base text-zinc-800 dark:text-zinc-300">
            The page you&apos;re looking for cannot be found. Go{" "}
            <Link
              href="/"
              className="font-semibold hover:underline focus:underline"
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
