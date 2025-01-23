import React from "react"

type THEME_OPTIONS = "system" | "light" | "dark"

interface THEME_HOOK {
  theme: THEME_OPTIONS
  setTheme: React.Dispatch<React.SetStateAction<THEME_OPTIONS>>
}

const useTheme = (): THEME_HOOK => {
  const [theme, setTheme] = React.useState<THEME_OPTIONS>("system")

  React.useEffect(() => {
    setTheme(() => {
      const savedTheme = localStorage.getItem("theme")
      if (
        savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
      ) {
        return savedTheme
      }
      return "system"
    })
  }, [])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleSystemThemeChange = (e: MediaQueryListEvent): void => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches)
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [theme])

  return { theme, setTheme }
}

export default useTheme
