export default function Header() {
  return (
    <header>
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-6xl mx-auto glass-card px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 cursor-pointer">
              <svg
                className="w-8 h-8 text-primary]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="text-xl font-bold">Wanderlust</span>
            </a>
            <div className="hidden md:flex items-center gap-6 sm:gap-8">
              <a
                href="#destinations"
                className="text-sm font-medium --text-muted) hover:text-primary transition-colors cursor-pointer"
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors cursor-pointer"
              >
                Experiences
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
            <div className="hidden md:block">
              <button className="btn-primary text-sm py-2.5 px-5">
                Plan Your Trip
              </button>
            </div>
            <button
              className="md:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
