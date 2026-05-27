import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/atividades")({
  head: () => ({
    meta: [
      { title: "Atividades — UFRRJ Extensão" },
      { name: "description", content: "Conheça a equipe, a liderança e como participar das atividades extensionistas." },
      { property: "og:title", content: "Atividades — UFRRJ Extensão" },
      { property: "og:description", content: "Equipe, liderança e como participar." },
      { property: "og:url", content: "/atividades" },
    ],
    links: [{ rel: "canonical", href: "/atividades" }],
  }),
  component: AtividadesPage,
});

const team = ["[Nome]", "[Nome]", "[Nome]", "[Nome]", "[Nome]", "[Nome]", "[Nome]", "[Nome]", "[Nome]"];

function AtividadesPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Equipe</p>
          <h1 className="mt-3 font-serif text-3xl font-black leading-tight text-foreground sm:text-4xl">
            O que une sua equipe para atingir um objetivo? Escreva uma descrição com uma ou duas frases.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          Liderança
        </h2>
        <div className="mt-2 h-1 w-16 bg-primary" />
        <div className="mt-8 grid items-start gap-8 md:grid-cols-[1fr_2fr]">
          <figure>
            <div className="aspect-square w-full bg-gradient-to-br from-primary/30 to-secondary" />
            <figcaption className="mt-3 text-sm text-muted-foreground">Legenda da foto</figcaption>
          </figure>
          <p className="text-base leading-relaxed text-foreground/90">
            Quem lidera a equipe? Descreva o fundador da equipe ou os membros que exercem a função de líder.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
            Conheça a equipe
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary" />
          <p className="mt-6 text-base text-foreground/90">Escreva uma descrição breve sobre a equipe.</p>

          <figure className="mt-8">
            <div className="aspect-[21/9] w-full bg-gradient-to-br from-primary/20 via-secondary to-primary/10" />
            <figcaption className="mt-3 text-sm text-muted-foreground">Legenda da foto da equipe</figcaption>
          </figure>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {team.map((name, i) => (
              <li key={i} className="flex items-center gap-3 bg-background p-4">
                <div className="grid h-10 w-10 place-items-center bg-primary font-serif text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <span className="font-serif text-base text-foreground">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          Faça parte da equipe
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-primary" />
        <p className="mt-6 text-base text-foreground/90">
          Escreva uma descrição breve sobre o que você espera de um membro da equipe.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
        >
          Candidate-se agora
        </a>
      </section>
    </div>
  );
}
