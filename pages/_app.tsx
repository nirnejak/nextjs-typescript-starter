import * as React from "react"

import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

import classNames from "utils/classNames"

import "../styles/main.css"

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
})

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main className={classNames(inter.variable, "font-sans")}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
