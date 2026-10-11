import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { founderPortrait } from "@/lib/data/images";

// Copy supplied by the client ("About Me" doc, Aug 2026).
export function FounderBio() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Photo
              src={founderPortrait}
              alt="Founder of Gatekeeper Education Consulting"
              className="aspect-[4/5] w-full max-w-sm"
              priority
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>About Me</Eyebrow>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              An independent education consultant, not a call centre.
            </h1>
            <blockquote className="mt-8 border-l-2 border-champagne pl-5">
              <p className="font-heading text-lg font-semibold leading-snug text-navy sm:text-xl">
                &ldquo;Education is the one asset no one can steal from you.
                Once it&rsquo;s yours, it&rsquo;s yours.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-dark-blue">
                &mdash; My father
              </footer>
            </blockquote>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-dark-blue">
              Those words have never left me. I&rsquo;ve lived them myself and
              experienced firsthand how education can transform not just a
              career, but an entire life. Education opened doors I never knew
              existed, expanded my worldview, and gave me a future far beyond
              what I had imagined.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-warm-alabaster py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-5 text-base leading-relaxed text-dark-blue sm:text-lg">
              <p>
                Yet I also remember what it felt like to stand at the beginning
                of that journey. Fresh out of high school, I felt the
                overwhelming pressure of choosing the &ldquo;right&rdquo;
                university and programme. There was the fear of making the wrong
                decision and the anxiety that one choice could shape everything
                that followed.
              </p>
              <p>
                Then came the reality of studying overseas &mdash; navigating
                university applications, visa requirements, immigration
                paperwork, accommodation, and settling into a completely
                unfamiliar country. It was exciting, but it could also feel
                incredibly overwhelming. I know what it is like to stand at one
                of life&rsquo;s biggest crossroads feeling unsure, anxious, and
                afraid of making the wrong move.
              </p>
              <p>
                That experience is one of the reasons I founded{" "}
                <strong className="font-semibold text-navy">
                  Gatekeeper Education Consulting
                </strong>
                .
              </p>
              <p>
                I believe no one should have to navigate these decisions alone.
                Whether you are a high school graduate exploring your first
                university options, a university student seeking greater
                clarity, or a working adult considering a new direction, I want
                to be a steady guide through the process.
              </p>
              <p>
                As an independent education consultant, I help students and
                families navigate tertiary education pathways in Malaysia and
                around the world with greater clarity and confidence. I
                don&rsquo;t believe education consulting should simply be about
                securing an offer letter or getting into a university. It is
                about understanding the bigger picture &mdash; who you are, what
                you are good at, what matters to you, and where you want your
                journey to take you.
              </p>
              <p>
                I believe every student has unique gifts, strengths, and
                potential. My role is to help uncover those strengths and
                connect them with programmes, universities, and opportunities
                that align with their interests, abilities, and long-term
                aspirations.
              </p>
              <p>
                After close to eight years in education consulting, I have had
                the privilege of walking alongside several hundred students and
                families. I have also worked with adults in their 30s and 40s
                who are ready to change careers or begin a new chapter but are
                unsure where to start. Across different ages and stages of life,
                I&rsquo;ve seen the same thing:{" "}
                <strong className="font-semibold text-navy">
                  the right guidance can turn fear into focus.
                </strong>
              </p>
              <p>
                At Gatekeeper, we don&rsquo;t simply help you apply to a
                university. We help you understand your options, make informed
                decisions, and move forward with confidence.
              </p>
            </div>

            <p className="mt-10 border-t border-navy/10 pt-8 font-heading text-xl font-bold leading-snug text-navy sm:text-2xl">
              Because ultimately, it&rsquo;s not just about finding the right
              university. It&rsquo;s about finding the right path &mdash; and
              becoming the person ready to thrive in a rapidly changing world.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
