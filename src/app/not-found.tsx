import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <Eyebrow className="block">404</Eyebrow>
        <h1 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
          This page doesn&rsquo;t exist.
        </h1>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
