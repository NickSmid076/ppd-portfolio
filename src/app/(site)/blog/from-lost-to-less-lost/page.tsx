import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            From Feeling Lost to a Little Less Lost
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
            A personal reflection on growth, cultural identity, and rediscovering ambition.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-base leading-relaxed text-slate-300">
            This blog post reflects the journey that shaped my character and mindset — from life in Barcelona to returning home, rediscovering discipline, ambition, and the value of balance. It is not a story about perfection, but about becoming "a little less lost."
          </p>
        </div>
      </section>

      {/* Story */}
      <article className="mx-auto max-w-3xl px-6 py-8">
        <div className="space-y-6 text-base leading-relaxed text-slate-300">
          <p>
            In February 2025 my life began to change as I was about to leave for my internship at the W hotel in Barcelona. It wasn't about the internship; it was rather about living on my own for the first time and in a different country. I did know some Spanish but wasn't confident. It was a whole new change.
          </p>

          <p>
            My experience in Spain changed my path. When I arrived it felt like a holiday and paradise. However, little did I know this experience would change my perspective on my future.
          </p>

          <p>
            Spain, in comparison to the Netherlands, has a very different culture regarding working, people, and how people live their lives. In the Netherlands, conversations are often about work. After experiencing parties and daily life in Spain — even before starting my internship — I noticed a warm atmosphere. The people were very social and there was a distinct difference. If you try to speak Spanish, they will help you, whereas the Dutch switch to English.
          </p>

          {/* Pull Quote 1 */}
          <blockquote className="my-10 border-l-4 border-cyan-400 bg-cyan-500/10 py-6 pl-6 pr-4 text-xl font-medium italic text-cyan-100">
            "It taught me that the warmth I had always longed for was found in people."
          </blockquote>

          <p>
            As my internship progressed, I noticed a change unrelated to the internship itself. I was someone who always had goals, but here I finally let myself loose. I just enjoyed the presence of people and being social. I was living the easy life, seeing friends after the internship, and training kickboxing and boxing a lot. Fighting was the reason I got out of bed — not only to train, but because it's where my friends were. After training, we'd just hang out at the beach. It taught me that the warmth I had always longed for was found in people.
          </p>

          <p>
            However, these distractions caused me to lose focus on my internship assignments from school. When I eventually found my new internship, it was at Dialog Group. I had always been interested in tech but never really got into it.
          </p>

          <p>
            As I started the new internship, I realized the real effort required in working for a company again. I began to like the structure and challenge I had been missing. I felt I had hit a plateau in learning — questioning what I truly wanted. A few fights I had in Barcelona made me question whether I should pursue fighting more seriously.
          </p>

          {/* Pull Quote 2 */}
          <blockquote className="my-10 border-l-4 border-cyan-400 bg-cyan-500/10 py-6 pl-6 pr-4 text-xl font-medium italic text-cyan-100">
            "I want to be successful while still having the social life I loved in Barcelona."
          </blockquote>

          <p>
            However, these same challenges motivated me to pursue my career further because I enjoy being challenged. I didn't want to be "just a tech guy." I liked tech, but finance always spoke to me. This period gave me a life path: I want to be successful while still having the social life I loved in Barcelona.
          </p>

          <p>
            Finally, I broke my plateau by realizing what it means to take action. I carved a path for myself: pursuing education, learning more about finance, gaining real-world experience, having a circle to fall back on, and keeping my love for fighting while not neglecting my business development.
          </p>

          {/* Pull Quote 3 */}
          <blockquote className="my-10 border-l-4 border-cyan-400 bg-cyan-500/10 py-6 pl-6 pr-4 text-xl font-medium italic text-cyan-100">
            "Growth is not linear — you move from feeling lost to a little less lost."
          </blockquote>
        </div>
      </article>

      {/* Back Button */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex justify-center">
          <Link
            href="/assignments/personal-branding"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20"
          >
            ← Back to Personal Branding
          </Link>
        </div>
      </section>
    </main>
  );
}
