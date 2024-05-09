import * as React from "react"

import { Inter } from "next/font/google"

import classNames from "utils/classNames"

import "../styles/main.css"

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
})

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>

      <body
        className={classNames(
          inter.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
