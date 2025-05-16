"use client"
// hooks/useTheme.ts
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system')
  const [isDark, setIsDark] = useState(false)

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    const root = document.documentElement
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const useDark = newTheme === 'dark' || (newTheme === 'system' && isSystemDark)
    root.classList.toggle('dark', useDark)
    setIsDark(useDark)
 
  }

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'system'
    applyTheme(saved)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (localStorage.getItem('theme') === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  return { theme, setTheme: applyTheme, isDark }
}