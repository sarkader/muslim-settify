import { VideoFrame } from "@/components/VideoFrame";
import { videoTestimonials } from "@/data/video-testimonials";
import { textTestimonials } from "@/data/text-testimonials";

const TRAINING_LOOM_URL =
  "https://www.loom.com/embed/82efc365175a4b23beed7a87ad9687e2";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--divider)] bg-[var(--surface-2)]">
        <div className="container-custom py-6">
          <h1 className="text-xl font-semibold text-[var(--text)]">
            Muslim Settify — Training & Testimonials
          </h1>
        </div>
      </header>

      <main>
        {/* Section 1: Training */}
        <section className="section-spacing">
          <div className="container-custom">
            <h1 className="mb-12 text-[var(--text)]">Training</h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <VideoFrame
                title="Training Video 1"
                src={TRAINING_LOOM_URL}
                className="w-full"
              />
              <VideoFrame
                title="Training Video 2"
                src={TRAINING_LOOM_URL}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Video Testimonials */}
        <section className="section-spacing bg-[var(--surface-2)]">
          <div className="container-custom">
            <h2 className="mb-12 text-[var(--text)]">Video Testimonials</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {videoTestimonials.map((testimonial, index) => (
                <article key={index} className="card p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">
                      {testimonial.name}
                    </h3>
                    {testimonial.caption && (
                      <p className="text-sm text-[var(--muted)]">
                        {testimonial.caption}
                      </p>
                    )}
                  </div>
                  <VideoFrame
                    title={`${testimonial.name} testimonial`}
                    src={testimonial.url}
                    className="w-full"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Text Testimonials */}
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="mb-12 text-[var(--text)]">Text Testimonials</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {textTestimonials.map((testimonial, index) => (
                <article key={index} className="card p-6">
                  <p className="mb-4 text-base leading-relaxed text-[var(--text)]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-[var(--text)]">
                      {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="text-sm text-[var(--muted)]">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--divider)] bg-[var(--surface-2)] py-8">
        <div className="container-custom text-center text-sm text-[var(--muted)]">
          © {currentYear} Muslim Settify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

