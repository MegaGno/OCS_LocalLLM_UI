import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark")

  // โหลด theme จาก localStorage ตอนเปิดเว็บ
  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "theme"
    ) as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // update class + save localStorage
  useEffect(() => {
    const root = window.document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  // switch theme
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark"
        ? "light"
        : "dark"
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    )
  }

  return context
}