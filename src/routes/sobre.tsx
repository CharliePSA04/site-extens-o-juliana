import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — UFRRJ Extensão" },
      { name: "description", content: "Dados e descrição da atividade extensionista: coordenador, carga horária e detalhes." },
      { property: "og:title", content: "Sobre — UFRRJ Extensão" },
      { property: "og:description", content: "Dados e descrição da atividade extensionista." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sobre</p>
          <h1 className="mt-3 font-serif text-4xl font-black text-foreground sm:text-5xl">
            Nome da atividade
          </h1>
          <p className="mt-4 text-base text-muted-foreground">Coordenador:</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Carga horária da atividade: <span className="text-primary">90h</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foreground/90">
          Nesta atividade, os alunos desenvolveram...
        </p>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
            Dados da atividade
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Legenda de uma conquista recente",
              "Legenda de uma conquista recente",
            ].map((cap, i) => (
              <figure key={i} className="bg-background p-4">
                <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary" />
                <figcaption className="mt-3 text-sm text-muted-foreground">{cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
