import { useState, useEffect } from 'react'

export function useTheme() {
    const [isDark, setIsDark] = useState(false)
    const [colorTheme, setColorTheme] = useState('blue')
    const themes = [
        { id: 'blue', color: '#3B82F6', label: 'Blau' },
        { id: 'purple', color: '#8B5CF6', label: 'Porpra' },
        { id: 'green', color: '#10B981', label: 'Verd' }
    ]


    return {
        isDark,
        themes,
        colorTheme,
        toggleDark: () => setIsDark(!isDark),
        setColorTheme
    }
}

