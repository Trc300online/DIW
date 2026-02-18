export function ThemeToggle({ isDark, onToggle }) {
    return (
        <button onClick={onToggle} className="btn-primary">
            Canviar tema
        </button>
    )
}

