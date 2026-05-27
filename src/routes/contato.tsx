import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — UFRRJ Extensão" },
      { name: "description", content: "Perguntas frequentes e canais de contato do projeto de extensão." },
      { property: "og:title", content: "Contato — UFRRJ Extensão" },
      { property: "og:description", content: "Perguntas frequentes e canais de contato." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const faqs = Array.from({ length: 5 }, (_, i) => ({
  id: `q-${i + 1}`,
  q: "O que é uma pergunta frequente?",
  a: "Escreva aqui a resposta para a pergunta.",
}));

function ContatoPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contato</p>
          <h1 className="mt-3 font-serif text-4xl font-black text-foreground sm:text-5xl">
            Perguntas frequentes
          </h1>
          <p className="mt-4 text-base text-muted-foreground">Clique em uma pergunta:</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.id} value={f.id} className="border-border">
              <AccordionTrigger className="text-left font-serif text-base font-bold text-foreground hover:text-primary hover:no-underline">
                <span className="mr-3 text-primary">{String(i + 1).padStart(2, "0")}.</span>
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-foreground/80">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-serif text-xl font-bold text-foreground">Outros canais</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { t: "E-mail", v: "[E-mail]" },
              { t: "Endereço", v: "[Endereço]" },
              { t: "Telefone", v: "[Número de telefone]" },
            ].map((c) => (
              <div key={c.t} className="border-l-4 border-primary bg-background p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {c.t}
                </p>
                <p className="mt-2 font-serif text-base text-foreground">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
