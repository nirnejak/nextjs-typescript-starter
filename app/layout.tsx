import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Inter } from "next/font/google"
import localFont from "next/font/local"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>{renderSchemaTags()}</head>

        <body
          className={classNames(
            sansFont.variable,
            monoFont.variable,
            "overflow-x-hidden bg-zinc-50 dark:bg-zinc-900 font-sans"
          )}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
