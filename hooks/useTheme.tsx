import React from "react"

const useTheme = (): boolean => {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDark(event.matches)
      })
  }, [])

  return isDark
}

export default useTheme
