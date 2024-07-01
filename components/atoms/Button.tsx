import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"

import classNames from "@/utils/classNames"

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "bg-blue-500",
      secondary: "bg-gray-500",
    },
    size: {
      sm: "px-2 py-1",
      md: "px-3 py-2",
      lg: "px-4 py-3",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
})

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        buttonVariants({ variant: "primary", size: "md" }),
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
