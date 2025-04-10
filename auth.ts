import NextAuth from "next-auth"

import { DrizzleAdapter } from "@auth/drizzle-adapter"

import { db } from "@/drizzle.config"

import Google from "next-auth/providers/google"
import Apple from "next-auth/providers/apple"
import Twitter from "next-auth/providers/twitter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Apple, Twitter],
  adapter: DrizzleAdapter(db),
})
