export default function PopularDestinations() {
  return (
    <div>
      <section
        id="destinations"
        className="py-12 sm:py-20 px-6 bg-[var(--bg-light)]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <span className="text-sm font-medium text-[var(--secondary)] uppercase tracking-wider">
                Explore
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                Popular{" "}
                <span className="text-[var(--primary)]">Destinations</span>
              </h2>
            </div>
            <button className="btn-secondary self-start md:self-auto text-sm">
              View All Destinations
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="destination-card cursor-pointer group">
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop"
                  alt="Santorini, Greece"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-[var(--secondary)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Santorini, Greece</h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  Iconic white-washed buildings and stunning sunsets
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[var(--primary)]">
                      $1,299
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {" "}
                      / 7 days
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            </div>
            <div className="destination-card cursor-pointer group">
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop"
                  alt="Bali, Indonesia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-[var(--secondary)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.8
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Bali, Indonesia</h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  Tropical paradise with ancient temples and beaches
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[var(--primary)]">
                      $899
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {" "}
                      / 5 days
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            </div>
            <div className="destination-card cursor-pointer group">
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop"
                  alt="Swiss Alps"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-[var(--secondary)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Swiss Alps</h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  Breathtaking mountain views and adventure sports
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[var(--primary)]">
                      $1,599
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {" "}
                      / 6 days
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            </div>
            <div className="destination-card cursor-pointer group">
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop"
                  alt="Tokyo, Japan"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-[var(--secondary)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.7
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Tokyo, Japan</h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  Where tradition meets cutting-edge modernity
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[var(--primary)]">
                      $1,199
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {" "}
                      / 8 days
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
