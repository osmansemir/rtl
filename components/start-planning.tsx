export default function StartPlanning() {
  return (
    <div>
      <section className="py-12 sm:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for Your Next
            <br />
            <span className="text-[var(--primary)]">Adventure?</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-10 max-w-xl mx-auto">
            Start planning your dream trip today. Our travel experts are ready
            to help you create unforgettable memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
            <button className="btn-primary text-base px-8">
              Plan Your Trip
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button className="btn-secondary text-base px-8">
              Talk to Expert
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Secure Booking
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Best Price Guarantee
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              50K+ Happy Travelers
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
