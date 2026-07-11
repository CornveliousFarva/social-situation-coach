export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="mt-12 border-t border-slate-700 bg-slate-950 py-6"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-400">
        <p className="font-semibold text-slate-200">
          Social Situation Coach
        </p>

        <p>
          Helping users prepare for unfamiliar social situations through
          guidance, reflection, and personal growth.
        </p>

        <p>Version 1.0.0</p>

        <p>© {currentYear} Greg C. Schuman</p>
      </div>
    </footer>
  )
}