export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">A Bit About Me</h2>

          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              With 3 years of experience as a Frontend Developer, I specialize in building web applications that
              prioritize both aesthetics and seamless functionality. My journey since 2022 has involved extensive work
              with Vue.js, Nuxt.js, Next.js, and React.js, consistently aiming to optimize development processes and
              elevate user interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
