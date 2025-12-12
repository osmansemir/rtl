import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-20 px-6 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto pt-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-primary">Your #1 Choice for Travel</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Your
                <br />
                <span className="text-primary">Next Adventure</span>
              </h1>
              <p className="text-lg text-muted mb-8 max-w-md">
                Explore breathtaking destinations, create unforgettable
                memories, and experience the world like never before with our
                curated travel experiences.
              </p>
              <div className="glass-card p-4 mb-8">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs text-muted mb-1">
                      Where to?
                    </label>
                    <input
                      type="text"
                      placeholder="Search destination"
                      className="w-full bg-transparent text-sm font-medium focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1">
                      Check in
                    </label>
                    <input
                      type="text"
                      placeholder="Add date"
                      className="w-full bg-transparent text-sm font-medium focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1">
                      Travelers
                    </label>
                    <input
                      type="text"
                      placeholder="2 adults"
                      className="w-full bg-transparent text-sm font-medium focus:outline-none"
                    />
                  </div>
                  <button className="btn-primary text-sm">Inquire</button>
                </div>
              </div>
              <div className="flex gap-6 sm:gap-8">
                <div>
                  <div className="text-2xl font-bold flex items-center gap-1">
                    500+
                  </div>
                  <div className="text-sm text-muted">Destinations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold flex items-center gap-1">
                    5K+
                  </div>
                  <div className="text-sm text-muted">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold flex items-center gap-1">
                    <span className="text-secondary">★</span>4.5
                  </div>
                  <div className="text-sm text-muted">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      width={400}
                      height={300}
                      src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop"
                      alt="Beach destination"
                      className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop"
                      alt="Mountain destination"
                      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=400&fit=crop"
                      alt="City destination"
                      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      width={400}
                      height={300}
                      src="https://images.unsplash.com/photo-1669115380104-886eeab91820?w=400&h=300&fit=crop"
                      alt="Lake destination"
                      className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary"
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
                </div>
                <div>
                  <div className="font-bold">Next Trip</div>
                  <div className="text-sm text-muted">Asmara, Eritrea</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
